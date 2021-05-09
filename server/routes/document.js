const router = require('express').Router()
const Documents = require('../models/document.js')
const Str = require('@supercharge/strings')
const fs = require('fs')
const { google } = require('googleapis')
const path = require('path')


/*=============================================================================*/ 
// GOOGLE-DRIVE API STUFF

const oauth2Client = new google.auth.OAuth2(
	process.env.CLIENT_ID,
	process.env.CLIENT_SECRET,
	process.env.REDIRECT_URI
)

oauth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN})

const drive = google.drive({
	version: 'v3',
	auth: oauth2Client
})

/*=============================================================================*/ 

// show all the files (admin)
router.get('/', async(req, res)=> {
    const data = await Documents.find()
    res.json(data)
})

// show 10 files on user page
router.get('/get', async(req, res)=> {
    const data1 = await Documents.find().sort({dateAdded:-1}).limit(10)
    const data2 = await Documents.find().sort({views:-1}).limit(10)
    res.json({data1: data1, data2: data2})
})

// get one file
router.get('/:id', getDocument ,async (req, res) => {
    res.json(res.document)
})

// store pdf in static folder
router.post('/', async (req, res)=> {
    if(res.files === null) return res.status(400).json({msg: 'No file uploaded'})
    const file = req.files.file
    const newName = Str.random(8) + file.name
    file.mv(`${__dirname}/../public/uploads/${newName}`, async err=>{
        if(err) {
            console.log(err)
            return res.status(500).send(err)
        }

        const filePath = `${__dirname}/../public/uploads/${newName}`

        // upload file
        const id = await uploadFileToDrive(filePath, file.name)

        // get its link
        const link = await getFileLink(id)

        res.json({fileName:newName, downloadLink: link.webContentLink, viewLink: link.webViewLink, driveId: id ,isSuccessfull:true})
    })
})

// now store the data in the db
router.post('/Data', async (req, res)=> {
    let documentData
    try {
        documentData = new Documents({
            subCode: req.body.subCode,
            fileName: req.body.fileName,
            tags: req.body.tags,
            downloadLink: req.body.downloadLink,
            viewLink: req.body.viewLink,
            driveId: req.body.driveId,
            uploadedBy: req.body.uploadedBy
        })
        const newDoc = await documentData.save()
        // console.log(newDoc)
        res.json({isSuccessfull2: true})
    } catch(err) {
        console.log('Error')
    }
})

// search 
router.post('/search', async (req, res)=>{
    try {
        let pprs = await Documents.find({
            tags: {
                $all: req.body,
            },
        })
        res.json(pprs)
    }catch(err) {
        res.json(err)
    }
})

// edit
router.patch('/:id', getDocument ,async (req, res) => {
    if(req.body.subCode != null) {
        res.document.subCode = req.body.subCode
    }
    
    if(req.body.tags != null) {
        res.document.tags = req.body.tags
    }
    
    try {
        const updatedFile = await res.document.save()
        res.json({isSuccess: true})
    }catch(err) {
        res.json({isSuccess:false})
    }
})

router.patch('/inc/:id', getDocument, async (req, res)=>{
    try {
        res.document.views = res.document.views + 1
        const updatedFile = await res.document.save()
        res.json({isSuccess:true})
    } catch(err) {
        res.json({isSuccess:false})
    }
})

router.delete('/:id', getDocument ,async (req, res) => {
    const {id, subCode, tags, dateAdded, url, driveId, uploadedBy, views } = res.document

    deleteFileFromDrive(driveId)

    try {
        await res.document.remove()
        res.json({isSuccessfull: true, subCode: subCode, id: id})
    } catch(err) {
        res.json({message: err.message})
    }
})

async function getDocument (req, res, next) {
    let document
    try {
        document = await Documents.findById(req.params.id)
        if(document==null) return res.status(404).json({message: 'Cannot find subscriber'})
    } catch(err) {
        return res.status(500).json({message: err.message})
    }
    res.document = document
    next()
}

async function uploadFileToDrive(filePath, newName) {
    try {
        const response = await drive.files.create({
            requestBody: {
                name: newName,
                mimeType: 'application/pdf'
            },
            media: {
                mimeType: 'application/pdf',
                body: fs.createReadStream(filePath)
            }
        })

        return response.data.id
    } catch (error) {
        console.log( 'we failed while uploading ' + error.message)
    }
}

async function getFileLink(id) {
    try {
        await drive.permissions.create({
            fileId: id,
            requestBody: {
                role: 'reader',
                type: 'anyone'
            }
        })

        const result = await drive.files.get({
            fileId: id,
            fields: 'webViewLink, webContentLink'
        })

        return result.data

    } catch(err) {
        console.log(err.message)
    }
}

async function deleteFileFromDrive(id) {
    try {
		const response = drive.files.delete({
			fileId:id
		})
		// console.log(response.data, response.status)
	} catch (error) {
		console.log(error.message)
	}
}

module.exports = router


/*
Client Id:  249633001858-8enqivlsihtbtstf38o23m9v4fgekfpr.apps.googleusercontent.com
client secret: Fo6WClIfW8vaHGH0Il-Gpmmf
redirect uri: https://developers.google.com/oauthplayground/
refresh token: 1//04ZPwngKrv1KcCgYIARAAGAQSNwF-L9IrpMnKobwToh1C-sWJQXJkH-N__SzfTG9oTHsDjYvxabbBwzgvi7hjtj3KGUzvn9CnKWo
*/ 
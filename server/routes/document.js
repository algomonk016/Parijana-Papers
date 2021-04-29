const router = require('express').Router()
const Documents = require('../models/document.js')
const Str = require('@supercharge/strings')
const fs = require('fs')

// get
router.get('/', async(req, res)=> {
    const data = await Documents.find()
    res.json(data)
})

router.get('/get', async(req, res)=> {
    const data1 = await Documents.find().sort({dateAdded:-1}).limit(10)
    const data2 = await Documents.find().sort({views:-1}).limit(10)
    res.json({data1: data1, data2: data2})
})


// get one
router.get('/:id', getDocument ,async (req, res) => {
    res.json(res.document)
})

// store pdf in static folder
router.post('/', async (req, res)=> {
    if(res.files === null) return res.status(400).json({msg: 'No file uploaded'})
    const file = req.files.file
    const newName = Str.random(8) + file.name
    file.mv(`${__dirname}/../public/uploads/${newName}`, err=>{
        if(err) {
            console.log(err)
            return res.status(500).send(err)
        }
        res.json({subCode: file.name, filePath: `/uploads/${newName}`, isSuccessfull:true, fileName:newName})
    })
})

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

router.post('/Data', async (req, res)=> {
    let documentData
    try {
        documentData = new Documents({
            subCode: req.body.subCode,
            filePath: req.body.documentUrl,
            tags: req.body.tags,
            fileName: req.body.fileName,
            uploadedBy: req.body.uploadedBy
        })
        const newDoc = await documentData.save()
        // console.log(newDoc)
        res.json({isSuccessfull2: true})
    } catch(err) {
        console.log('Error')
    }
})

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
    const {tags, id, subCode, filePath, date, fileName} = res.document

    try {
        let path = `${__dirname}/../public/uploads/${fileName}`
        fs.unlinkSync(path)
        // res.send(path)
    } catch(err) {
        res.json({message: err.message})
    }

    try {
        await res.document.remove()
        res.json({isSuccessfull: true, subCode: subCode, id: id})
    } catch(err) {
        res.json({message: err.message})
    }
    // res.send(filePath)
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

module.exports = router
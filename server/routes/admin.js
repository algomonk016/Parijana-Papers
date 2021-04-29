const router = require('express').Router()
const Admins = require('../models/admin.js')
const bcrypt = require('bcryptjs')

const getAdmin = async(req, res, next) => {
    let admin
    try {
        admin = await Admins.findById(req.params.id)
        if(admin==null) return res.status(404).json({message:'Admin not found'})
    } catch(err) {
        return res.status(500).json({message: err.message})
    }
    res.admin = admin
    next()
}

router.get('/', async (req, res)=> {
    // res.send('this is working')
    try {
        let admins = await Admins.find()
        res.json(admins)
    } catch(err) {
        res.json({message: err.message})
    }
})

router.get('/:id', getAdmin, async(req, res)=>{
    res.json(res.admin)
})

router.post('/', async (req, res)=> {
    let createAdmin
    try {
        createAdmin = new Admins({
            name: req.body.name,
            adminId: req.body.adminId,
            password: await bcrypt.hash(req.body.password, 10),
            hasPermission: false
        })
        const newAdmin = await createAdmin.save()
        res.json(newAdmin)
    } catch(err) {
        res.json({message: err.message})
    }
})

router.post('/login', async(req, res)=> {
    try{
        const id = req.body.adminId
        const pass = req.body.password
        const admin = await Admins.findOne({adminId: id})

        const isMatch = await bcrypt.compare(pass, admin.password)
        if(isMatch == true) res.json(admin)
        else res.json({})
    } catch(err){
        res.json({})
    }
})

router.delete('/:id', getAdmin, async(req, res)=>{
    try {
        await res.admin.remove()
        res.json({isRemoved: true, id: res.admin._id})
    } catch(err) {
        res.json(err)
    }
})


module.exports = router
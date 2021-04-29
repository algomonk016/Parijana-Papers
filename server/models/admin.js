const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    adminId: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    hasPermission: {
        type:Boolean,
    },
    dateRegistered: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('AdminLists', adminSchema)
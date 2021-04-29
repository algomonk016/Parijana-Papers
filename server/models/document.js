const mongoose = require('mongoose')

const documentSchema = mongoose.Schema({
    subCode: {
        type:String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    uploadedBy: {
        type: String,
        required: true
    },
    views:{
        type:Number,
        default:0
    },
    dateAdded: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Documents', documentSchema)
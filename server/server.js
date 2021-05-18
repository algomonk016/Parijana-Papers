require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const  fileUpload = require('express-fileupload')

// database connection
require('./db.js')

app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(express.static('./public'))

// Routes   
// admin
const adminRoute = require('./routes/admin.js')
app.use('/college/admin', adminRoute)

// document
const documentRoute = require('./routes/document.js')
app.use('/college/document', documentRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`the server has started at ${PORT}`))
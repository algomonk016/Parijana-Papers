const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology:true})
const db = mongoose.connection
db.on('error', (err)=> console.log(err))
db.once('open', ()=> console.log('connected to database'))
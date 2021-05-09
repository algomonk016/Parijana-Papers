const mongoose = require('mongoose')
// const DATABASE_URL="mongodb+srv://yuvanastra:h821k1JKBzCpP8SD@cluster0.w1sqg.mongodb.net/Parijana-Papers?retryWrites=true"
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology:true})
const db = mongoose.connection
db.on('error', (err)=> console.log(err))
db.once('open', ()=> console.log('connected to database'))
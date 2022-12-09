const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/pokemon-tcg-db', {
    useNewUrlParser: true
})

const db = mongoose.connection
db.on('connected', ()=> {
    console.log(`We in this bitch at ${db.host}:${db.port}`)
})
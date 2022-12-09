const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({
    id: String,
    name: String,
})

const Card = module.exports = mongoose.model('Card', cardSchema)

module.exports = Card
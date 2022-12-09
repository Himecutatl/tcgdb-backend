const mongoose = require('mongoose')
require('./connnection')
const Card = require('../models/card')
const cardSeeds = require('./seeds.json')


const cardSeeds = async() => {
    await Card.deleteMany({});
    await Card.insertMany({cardSeeds})
}

cardSeeds().then(() => {
    mongoose.connection.close()
})
// Card.deleteMany({})
//     .then(()=> {
//         return Card.insertMany(cardSeeds)
//         .then((cards)=>{
//             console.log(cards)
//         })
//     })
//     .finally(()=>{
//         process.exit()
//     })
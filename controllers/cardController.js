const Card = require('../models/card')

const index = (req,res) => {
    Card.find({}, (err, cards)=>{
        res.json(cards)
        console.log(cards)
    })
}

const create = (req,res) => {
    console.log(req.body)
    Card.create(req.body)
    .then((card)=>{
        console.log(card)
        Card.find({}, (e, cards)=>{
            res.json(cards)
        })
    })
}

const deleteCard = (req,res) => {
    Card.findByIdAndDelete(req.params.id, (err, g) => {
        if(err){
            res.status(400).json(err)
            return
        }
        Card.find({}, (e, cards)=> {
            res,json(cards)
        })
    })
}

const update = (req,res) => {
    Card.findByIdAndUpdate(req.params.id, req.body, (err, g) => {
        if(err){
            res.status(400).json(err)
            return
        }
        Card.find({}, (e, cards)=> {
            res.json(cards)
        })
    })
}

module.exports = {
    index,
    create,
    deleteCard,
    update
}
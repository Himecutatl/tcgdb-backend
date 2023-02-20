const Card = require('../models/card')

const index = (req,res) => {
    Card.find({}, (err, cards)=>{
        res.json(cards)
        console.log(cards)
    })
}

const create = (req,res) => {
    //  const { name } = req.body;
    // Card.create({ name })
    //     .then(response => res.json(response))
    //     .catch(err => res.json(err));
    //     console.log(name)


    Card.create(req.body, (err,u) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(u)
        console.log(req.body)
    })
    
}

const show = (req, res) => {
    Card.findById(req.params.id, (err,u) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(u)
    })
}

const deleteCard = (req,res) => {
    Card.findByIdAndDelete(req.params.id, (err, g) => {
        if(err){
            res.status(400).json(err)
            return
        }
        Card.find({}, (e, cards)=> {
            res.json(cards)
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
    show,
    deleteCard,
    update
}
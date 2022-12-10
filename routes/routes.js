const express = require('express')
const router = express.Router()
const cardCtrl = require('../controllers/cardController.js')
const card = require('../models/card.js')

router.get('/', cardCtrl.index)
router.get('/:id', cardCtrl.show)
router.delete('/:id', cardCtrl.deleteCard)
router.post('/', cardCtrl.create)
router.put('/:id', cardCtrl.update)

module.exports = router
const express = require('express')
const router = express.Router()
const cardCtrl = require('../controllers/cardController.js')

router.get('/', cardCtrl.index)
router.delete('/:id', cardCtrl.deleteCard)
router.post('/', cardCtrl.create)
router.put('/:id', cardCtrl.update)

module.exports = router
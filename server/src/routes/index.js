const express = require('express')
const router = express.Router()
const buses = require('./buses')
const coronas = require('./coronas')

router.use('/bus', buses)
router.use('/corona', coronas)

module.exports = router
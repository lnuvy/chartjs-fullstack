const express = require('express')
const router = express.Router()
const buses = require('./buses')

router.use('/bus', buses)

module.exports = router
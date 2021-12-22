const express = require('express')
const DataRouter = express.Router()
const Bues = require('../../models/Buse')

DataRouter.route('/').get(async (req, res) => {
  const buses = await Bues.find()
  console.log(buses);
  res.json({ status: 200, buses })
})

module.exports = DataRouter
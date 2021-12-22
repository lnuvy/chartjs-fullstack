const express = require('express')
const DataRouter = express.Router()
const Buse = require('../../models/Buse')

DataRouter.route('/').get(async (req, res) => {
  const buses = await Buse.find()
  res.json({ status: 200, buses })
})

// DataRouter.route('/test').get(async (req, res) => {
//   // Buse.findOne({ month: req.params.년월 }, (err, bus) => {
//   //   if (err) throw err;
//   //   res.json({ status: 200, bus })
//   // })

//   Buse.find({ month: req.params.년월 }, (err, bus) => {
//     if (err) throw err;
//     res.json({ status: 200, bus })
//   })

// })

module.exports = DataRouter
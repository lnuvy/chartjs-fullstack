const express = require('express')
const DataRouter = express.Router()
const Corona = require('../../models/Corona')

DataRouter.route('/').get(async (req, res) => {

  let coronas = await Corona.find()
  let filtered = null;

  if (req.query.start !== undefined) {
    filtered = coronas.filter((corona) => {
      return req.query.start <= corona.기준일
    })
  }
  if (req.query.end !== undefined) {
    if (filtered !== null) {
      filtered = filtered.filter((corona) => {
        return req.query.end >= corona.기준일
      })
    } else {
      filtered = coronas.filter((corona) => {
        return req.query.end >= corona.기준일
      })
    }

  }
  if (filtered === null) {
    res.json({ status: 200, coronas })
  } else {
    coronas = filtered
    res.json({ status: 200, coronas })
  }

})

module.exports = DataRouter
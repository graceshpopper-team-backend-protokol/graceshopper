const router = require('express').Router()
const { models: { Puzzle }} = require('../db')
module.exports = router

router.get('/dashboard', async (req, res, next) => {
  try {
    const puzzles = await Puzzle.findAll()
    res.json(puzzles)
  } catch (err) {
    next(err)
  }
})
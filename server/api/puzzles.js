const router = require('express').Router()
const { models: { Puzzle }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const puzzles = await Puzzle.findAll()
    res.json(puzzles)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const puzzle = await Puzzle.findByPk(req.params.id)
    res.json(puzzle)
  } catch (err) {
    next(err);
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const puzzle = await Puzzle.findByPk(req.params.id)
    res.json(await puzzle.update(req.body))
  } catch (err) {
    next(err);
  }
})

router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Puzzle.create(req.body));
  } catch (err) {
    next(err);
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const puzzle = await Puzzle.findByPk(req.params.id);
    await puzzle.destroy();

    res.send(puzzle);
  } catch(err) {
    next(err);
  }
})

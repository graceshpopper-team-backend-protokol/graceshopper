// API routes for puzzles - mounted on /api/puzzles
const router = require("express").Router();
const {
  models: { Puzzle },
} = require("../db");
module.exports = router;

// get route for all puzzles
router.get("/", async (req, res, next) => {
  try {
    const puzzles = await Puzzle.findAll();
    res.json(puzzles);
  } catch (err) {
    next(err);
  }
});

// get route for a single puzzle based on the provided puzzle id
router.get("/:id", async (req, res, next) => {
  try {
    const puzzle = await Puzzle.findByPk(req.params.id);
    res.json(puzzle);
  } catch (err) {
    next(err);
  }
});

// put route for a single puzzle based on the provided puzzle id
// updates puzzle based on the provided parameters
router.put("/:id", async (req, res, next) => {
  try {
    const puzzle = await Puzzle.findByPk(req.params.id);
    res.json(await puzzle.update(req.body));
  } catch (err) {
    next(err);
  }
});

// post route for puzzles
// allows us to create a new puzzle based on the provided data
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Puzzle.create(req.body));
  } catch (err) {
    next(err);
  }
});

// delete route for a single puzzle based on the provided puzzle id
// deletes puzzle from the database
router.delete("/:id", async (req, res, next) => {
  try {
    const puzzle = await Puzzle.findByPk(req.params.id);
    await puzzle.destroy();

    res.send(puzzle);
  } catch (err) {
    next(err);
  }
});

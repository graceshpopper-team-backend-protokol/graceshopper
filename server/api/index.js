// main entry point for server/api
// mounts all routes on /api + path below
const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/puzzles", require("./puzzles"));
router.use("/cart", require("./cart"));
router.use("/stripe", require("./stripe"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

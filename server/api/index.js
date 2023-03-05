const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/puzzles", require("./puzzles"));
router.use("/cart", require("./cart"));
router.use("/dashboard", require("./dashboard"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

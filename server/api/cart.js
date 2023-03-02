const router = require("express").Router();
const {
  models: { User, Order, OrderItem, Puzzle },
} = require("../db");
module.exports = router;

// this gets all carts
router.get("/", async (req, res, next) => {
  try {
    const orderElements = await OrderItem.findAll({
      include: {
        model: Order,
        where: {
          status: "PENDING",
        },
      },
    });
    res.json(orderElements);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const orderElements = await OrderItem.findAll({
      include: [
        {
          model: Order,
          where: {
            status: "PENDING",
            userId: req.params.id,
          },
        },
        { model: Puzzle },
      ],
    });
    res.json(orderElements);
  } catch (err) {
    next(err);
  }
});

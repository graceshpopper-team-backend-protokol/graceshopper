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

// add to cart portion
router.post("/:id", async (req, res, next) => {
  try {
    // find cart for the user
    const cart = await Order.findAll({
      where: {
        status: "PENDING",
        userId: req.params.id,
      },
    });
    // we found a cart
    if (cart) {
      const newItem = await OrderItem.create({
        orderQTY: Number(req.body.orderQTY),
        puzzleId: req.body.puzzleId,
        orderId: cart.id,
      });
      res.json(newItem);
    } else {
      // we didn't find the cart
      const newCart = await Order.create({
        date: new Date(),
        orderTotal: 0,
        status: "PENDING",
        userId: req.params.id,
      });
      const newItem = await OrderItem.create({
        orderQTY: Number(req.body.orderQTY),
        puzzleId: req.body.puzzleId,
        orderId: newCart.id,
      });
      res.json(newItem);
    }
  } catch (err) {
    next(err);
  }
});

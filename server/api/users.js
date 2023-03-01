const router = require("express").Router();
const {
  models: { User, Order, OrderItem },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/cart", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const cart = await user.getOrders({
      where: {
        status: "PENDING",
      },
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// update route for cart - removing, editing or adding elements
router.put("/:id/cart", async (req, res, next) => {
  try {
    const { productId } = req.body;
    const user = await User.findByPk(req.params.id);
    const cart = await user.getOrders({
      where: {
        status: "PENDING",
      },
    });
    const orderLineItem = await cart.getOrderItem({ where: { id: productId } });
    res.json(await orderLineItem.update(req.body));
  } catch (err) {
    next(err);
  }
});

// delete route for cart = allows us to clear the cart
router.delete("/:id/cart", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const cart = await user.getOrders({
      where: {
        status: "PENDING",
      },
    });
    res.send(await cart.destroy());
  } catch (err) {
    next(err);
  }
});

// update route for cart - update cart from cart status to order status
router.put("/:id/cart/checkout", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const cart = await user.getOrders({
      where: {
        status: "PENDING",
      },
    });
    res.json(await cart.update({ status: "ORDERED" }));
  } catch (err) {
    next(err);
  }
});

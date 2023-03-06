const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51MhZmKE8zFmeoXQYEoTxuO54sSmhyLrqKmbLhyDXpy3AZrKwHLSbzOiTpA8lyykYH2ZQ3GyGSqTWuIFQ6inhSBKZ00ltZQ8MxN"
);
const {
  models: { Order, OrderItem, Puzzle, User },
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
    const cart = await Order.findOne({
      where: {
        status: "PENDING",
        userId: req.params.id,
      },
    });
    // we found a cart
    if (cart) {
      // check if the item we're adding is already in the cart?
      const orderElement = await OrderItem.findOne({
        include: [
          {
            model: Order,
            where: {
              status: "PENDING",
              userId: req.params.id,
            },
          },
          {
            model: Puzzle,
            where: {
              id: req.body.puzzleId,
            },
          },
        ],
      });
      // if it's in the cart update the qty
      if (orderElement) {
        const newQTY =
          Number(orderElement.orderQTY) + Number(req.body.orderQTY);
        await orderElement.update({
          orderQTY: newQTY,
        });
        res.json(
          await OrderItem.findAll({
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
          })
        );
      } else {
        // if it's not in the cart create the item in the cart
        await OrderItem.create({
          orderQTY: Number(req.body.orderQTY),
          puzzleId: req.body.puzzleId,
          orderId: cart.id,
        });
        res.json(
          await OrderItem.findAll({
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
          })
        );
      }
    } else {
      // we didn't find the cart
      const newCart = await Order.create({
        date: new Date(),
        orderTotal: 0,
        status: "PENDING",
        userId: req.params.id,
      });
      await OrderItem.create({
        orderQTY: Number(req.body.orderQTY),
        puzzleId: req.body.puzzleId,
        orderId: newCart.id,
      });
      res.json(
        await OrderItem.findAll({
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
        })
      );
    }
  } catch (err) {
    next(err);
  }
});

// edit cart portion
router.put("/:id", async (req, res, next) => {
  try {
    const orderElement = await OrderItem.findOne({
      include: [
        {
          model: Order,
          where: {
            status: "PENDING",
            userId: req.params.id,
          },
        },
        {
          model: Puzzle,
          where: {
            id: req.body.puzzleId,
          },
        },
      ],
    });
    // no need to pass orderId unless the amount we are updating this element to is 0 - then we can provide orderId : null which will remove this item from the cart
    await orderElement.update({
      orderQTY: Number(req.body.orderQTY),
      puzzleId: req.body.puzzleId,
      orderId: req.body.orderId,
    });
    res.json(
      await OrderItem.findAll({
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
      })
    );
  } catch (err) {
    next(err);
  }
});

// delete all items in cart
router.delete("/:id", async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        status: "PENDING",
        userId: req.params.id,
      },
    });
    await cart.destroy();
    res.json([]);
  } catch (err) {
    next(err);
  }
});

// update cart from cart status to order status
router.put("/checkout/:id", async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        status: "PENDING",
        userId: req.params.id,
      },
    });
    res.json(
      await cart.update({ status: "ORDERED", orderTotal: req.body.orderTotal })
    );
  } catch (err) {
    next(err);
  }
});

// update cart from cart status to order status for guests
router.post("/checkout/guestcheckout/", async (req, res, next) => {
  try {
    const username = req.body.username;
    const user = await User.findAll({
      where: { username },
    });

    if (!user) {
      const newUser = await User.create({ username: req.body.username });
      const token = newUser.generateToken();
      const { id } = await jwt.verify(token, JWT);
      const newOrder = await Order.create({
        date: new Date(),
        orderTotal: req.body.orderTotal,
        status: "ORDERED",
        userId: id,
      });

      for (let i = 0; i < req.body.cart.length; i++) {
        await OrderItem.create({
          orderQTY: req.body.cart[i].orderQTY,
          puzzleId: req.body.cart[i].puzzleId,
          orderId: newOrder.id,
        });
      }
    } else {
      const token = user.generateToken();
      const { id } = await jwt.verify(token, JWT);
      const newOrder = await Order.create({
        date: new Date(),
        orderTotal: req.body.orderTotal,
        status: "ORDERED",
        userId: id,
      });
      for (let i = 0; i < req.body.cart.length; i++) {
        await OrderItem.create({
          orderQTY: req.body.cart[i].orderQTY,
          puzzleId: req.body.cart[i].puzzleId,
          orderId: newOrder.id,
        });
      }
    }
  } catch (err) {
    next(err);
  }
});

// send cart contents to Stripe for payment
router.post("/checkout/:id", async (req, res, next) => {
  try {
    //stripe wants price instead of id
    const items = req.body.cart;

    let lineItems = [];
    items.array.forEach((item) => {
      lineItems.push({
        price: item.stripeId,
        quantity: item.orderQTY,
      });
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:8080/success",
      cancel_url: "http://localhost:8080/cancel",
    });

    res.send(
      JSON.stringify({
        url: session.url,
      })
    );
  } catch (err) {
    next(err);
  }
});

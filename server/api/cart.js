const router = require("express").Router();
const stripe = require('stripe')('sk_test_51MhZmKE8zFmeoXQYEoTxuO54sSmhyLrqKmbLhyDXpy3AZrKwHLSbzOiTpA8lyykYH2ZQ3GyGSqTWuIFQ6inhSBKZ00ltZQ8MxN')
const {
  models: { Order, OrderItem, Puzzle },
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
        await orderElement.update({
          orderQTY: Number(req.body.orderQTY),
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
    res.json(await cart.update({ status: "ORDERED" }));
  } catch (err) {
    next(err);
  }
});

// send cart contents to Stripe for payment
router.post("/checkout/:id", async (req, res, next) => {
  try {
    //stripe wants price instead of id
    const items = req.body.items;
    let lineItems = [];
    items.forEach((items) => {
      lineItems.push({
        price: items.stripeId,
        quantity: items.orderQTY
      })
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:8080/success",
      cancel_url: "http://localhost:8080/cancel"
    });
    
    res.send(JSON.stringify({
      url: session.url
    }));

const session = stripe.checkout.sessions.create({
  line_items: lineItems,
  mode: "payment",
  success_url: "http://localhost:8080/success",
  cancel_url: "http://localhost:8080/cancel"
});

res.send(JSON.stringify({
  url: session.url
}));
  } catch (err) {
    next (err)
  }
});
 



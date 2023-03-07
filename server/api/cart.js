// API routes for cart - mounted on /api/cart

const router = require("express").Router();
const {
  models: { Order, OrderItem, Puzzle, User },
} = require("../db");
module.exports = router;

// get cart by userId
router.get("/:id", async (req, res, next) => {
  try {
    // finds all order items that correspond to the user id including orders and puzzles
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

// post route for specific user
router.post("/:id", async (req, res, next) => {
  try {
    // find cart for the user
    const cart = await Order.findOne({
      where: {
        status: "PENDING",
        userId: req.params.id,
      },
    });
    // if we found a cart
    if (cart) {
      // check if the item we're adding is already in the cart
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
        // send the cart back to the front
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
      // create a new cart and create the orderitem in the cart
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

// put route for specific user cart
router.put("/:id", async (req, res, next) => {
  try {
    // find the specific orderitem in the cart
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
    // update the orderItem based on the info we are receiving
    await orderElement.update({
      orderQTY: Number(req.body.orderQTY),
      puzzleId: req.body.puzzleId,
      orderId: req.body.orderId,
    });
    // send the cart with the updated element back
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

// delete route for the user
router.delete("/:id", async (req, res, next) => {
  try {
    // find the order for the user
    const cart = await Order.findOne({
      where: {
        status: "PENDING",
        userId: req.params.id,
      },
    });
    // delete the order from the database
    await cart.destroy();
    // send back an empty array
    res.json([]);
  } catch (err) {
    next(err);
  }
});

// put route for checkout based on user Id
router.put("/checkout/:id", async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        status: "PENDING",
        userId: req.params.id,
      },
    });
    // this sets the order from pending to ordered and updates the orderTotal
    res.json(
      await cart.update({ status: "ORDERED", orderTotal: req.body.orderTotal })
    );
  } catch (err) {
    next(err);
  }
});

// post route for guest cart upon checkout
router.post("/checkout/guestcheckout", async (req, res, next) => {
  try {
    // since we are checking out as a guest create a new order
    const newOrder = await Order.create({
      date: new Date(),
      orderTotal: req.body.orderTotal,
      status: "ORDERED",
      userId: req.body.userId,
    });
    // create orderItem for all elements in the cart
    for (let i = 0; i < req.body.cart.length; i++) {
      await OrderItem.create({
        orderQTY: req.body.cart[i].orderQTY,
        puzzleId: req.body.cart[i].puzzleId,
        orderId: newOrder.id,
      });
    }
    // send back an empty array because we do not need to access the orderitems once they are pushed to the database
    res.json([]);
  } catch (err) {
    next(err);
  }
});

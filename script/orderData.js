const { faker } = require("@faker-js/faker");
const {
  models: { Order, OrderItem },
} = require("../server/db");

/**
 * bulkcreates orders and orderitems in the database
 */
async function orderSeed() {
  // Creating orders
  for (let i = 0; i < 50; i++) {
    await Order.create({
      date: faker.date.past(),
      orderTotal: faker.finance.amount(),
      status: faker.helpers.arrayElement(["PENDING", "ORDERED"], 1),
      userId: Math.floor(Math.random() * 49) + 1,
    });
  }
  for (let i = 0; i < 100; i++) {
    await OrderItem.create({
      orderQTY: Math.floor(Math.random() * 5) + 1,
      puzzleId: Math.floor(Math.random() * 50) + 1,
      orderId: Math.floor(Math.random() * 49) + 1,
    });
  }
}

module.exports = orderSeed;

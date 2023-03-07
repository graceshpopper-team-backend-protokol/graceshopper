// demo data to seed database with orderitems and orders
const { faker } = require("@faker-js/faker");
const {
  models: { Order, OrderItem },
} = require("../server/db");

/**
 * function that bulkcreates 30 orders and 33 orderitems in the database
 */
async function orderSeed() {
  // Creating orders
  await Order.create({
    date: faker.date.past(),
    orderTotal: 0.0,
    status: "PENDING",
    userId: 2,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 0.0,
    status: "PENDING",
    userId: 3,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 0.0,
    status: "PENDING",
    userId: 4,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 0.0,
    status: "PENDING",
    userId: 5,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 0.0,
    status: "PENDING",
    userId: 6,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 0.0,
    status: "PENDING",
    userId: 7,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 0.0,
    status: "PENDING",
    userId: 8,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 0.0,
    status: "PENDING",
    userId: 9,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 0.0,
    status: "PENDING",
    userId: 10,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 0.0,
    status: "PENDING",
    userId: 11,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 17.59,
    status: "ORDERED",
    userId: 2,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 35.18,
    status: "ORDERED",
    userId: 2,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 21.99,
    status: "ORDERED",
    userId: 2,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 43.98,
    status: "ORDERED",
    userId: 3,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 14.29,
    status: "ORDERED",
    userId: 3,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 14.29,
    status: "ORDERED",
    userId: 4,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 17.59,
    status: "ORDERED",
    userId: 5,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 21.99,
    status: "ORDERED",
    userId: 6,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 21.99,
    status: "ORDERED",
    userId: 7,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 17.59,
    status: "ORDERED",
    userId: 8,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 35.18,
    status: "ORDERED",
    userId: 9,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 42.87,
    status: "ORDERED",
    userId: 10,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 14.29,
    status: "ORDERED",
    userId: 11,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 14.29,
    status: "ORDERED",
    userId: 12,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 21.99,
    status: "ORDERED",
    userId: 13,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 21.99,
    status: "ORDERED",
    userId: 14,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 43.98,
    status: "ORDERED",
    userId: 15,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 17.59,
    status: "ORDERED",
    userId: 16,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 35.18,
    status: "ORDERED",
    userId: 17,
  });
  await Order.create({
    date: faker.date.past(),
    orderTotal: 31.88,
    status: "ORDERED",
    userId: 18,
  });
  // create order items to attach to order
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 1,
    orderId: 30,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 17,
    orderId: 30,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 19,
    orderId: 1,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 3,
    orderId: 1,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 40,
    orderId: 1,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 20,
    orderId: 2,
  });
  await OrderItem.create({
    orderQTY: 2,
    puzzleId: 17,
    orderId: 3,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 33,
    orderId: 4,
  });
  await OrderItem.create({
    orderQTY: 2,
    puzzleId: 16,
    orderId: 5,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 28,
    orderId: 6,
  });
  await OrderItem.create({
    orderQTY: 5,
    puzzleId: 33,
    orderId: 7,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 15,
    orderId: 8,
  });
  await OrderItem.create({
    orderQTY: 3,
    puzzleId: 9,
    orderId: 9,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 19,
    orderId: 10,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 28,
    orderId: 11,
  });
  await OrderItem.create({
    orderQTY: 2,
    puzzleId: 25,
    orderId: 12,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 43,
    orderId: 13,
  });
  await OrderItem.create({
    orderQTY: 2,
    puzzleId: 36,
    orderId: 14,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 11,
    orderId: 15,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 1,
    orderId: 16,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 17,
    orderId: 17,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 40,
    orderId: 18,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 31,
    orderId: 19,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 19,
    orderId: 20,
  });
  await OrderItem.create({
    orderQTY: 2,
    puzzleId: 27,
    orderId: 21,
  });
  await OrderItem.create({
    orderQTY: 3,
    puzzleId: 4,
    orderId: 22,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 9,
    orderId: 23,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 2,
    orderId: 24,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 45,
    orderId: 25,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 38,
    orderId: 26,
  });
  await OrderItem.create({
    orderQTY: 2,
    puzzleId: 41,
    orderId: 27,
  });
  await OrderItem.create({
    orderQTY: 1,
    puzzleId: 22,
    orderId: 28,
  });
  await OrderItem.create({
    orderQTY: 2,
    puzzleId: 30,
    orderId: 29,
  });
}

module.exports = orderSeed;

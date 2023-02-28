//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Puzzle = require("./models/Puzzle");
const Order = require("./models/Order");
const OrderItem = require("./models/OrderItem");

//associations could go here!
Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

OrderItem.belongsTo(Puzzle);
Puzzle.hasMany(OrderItem);

User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Puzzle,
    Order,
    OrderItem,
  },
};

const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  date: {
    type: Sequelize.DATE,
    allowNullL: false,
  },
  orderTotal: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  status: {
    type: Sequelize.ENUM("PENDING", "ORDERED"),
  },
});

module.exports = Order;

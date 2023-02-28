const Sequelize = require("sequelize");
const db = require("../db");

const OrderItem = db.define("orderitem", {
  orderQTY: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = OrderItem;

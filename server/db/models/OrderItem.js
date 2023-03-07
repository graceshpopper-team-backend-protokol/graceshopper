// OrderItem model that holds the orderQTY - this is associated with the puzzle and order so we know which orderitem belongs to which order and which puzzle is associated with which orderItem

const Sequelize = require("sequelize");
const db = require("../db");

const OrderItem = db.define("orderitem", {
  orderQTY: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = OrderItem;

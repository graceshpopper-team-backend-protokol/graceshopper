const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    date: {
        type: Sequelize.DATE,
        allowNullL: false
    },
    orderQTY: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('PENDING', 'ORDERED')
    }
})

module.exports = Order;
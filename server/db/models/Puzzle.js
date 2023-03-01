const Sequelize = require("sequelize");
const db = require("../db");

const Puzzle = db.define("puzzle", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  stockQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  imgURL: {
    type: Sequelize.STRING,
    defaultValue: 'https://picsum.photos/200'
  },
  puzzlePieces: {
    type: Sequelize.ENUM(['250 pieces', '500 pieces', '1000 pieces']),
    allowNull: false,
  },
  price: {
    type: Sequelize.ENUM(['$12.99', '$15.99', '$19.99']),
    allowNull: false,
  },
});

module.exports = Puzzle;

// aggregate seed that is called whenever we initialize a server connection
"use strict";
const userSeed = require("./userData");
const seedPuzzles = require("./Puzzledata");
const orderSeed = require("./orderData");

/**
 * seed - this function seeds the database with users, puzzles and orders
 * logs a message once seeding has finalized
 */
async function seed() {
  // Creating Users
  await userSeed();
  // creating puzzles
  await seedPuzzles();
  // creating orders
  await orderSeed();
  console.log(`seeded successfully`);
}

module.exports = seed;

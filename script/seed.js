"use strict";
const userSeed = require("./userData");
const seedPuzzles = require("./Puzzledata");
const orderSeed = require("./orderData");

/**
 * seed - this function seeds the database with users and puzzles
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

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;

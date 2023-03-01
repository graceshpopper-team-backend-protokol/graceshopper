"use strict";
const userSeed = require("./userData");
const seedPuzzles = require("./Puzzledata");

/**
 * seed - this function seeds the database with users and puzzles
 */
async function seed() {
  // Creating Users
  userSeed();
  // creating puzzles
  seedPuzzles();
  console.log(`seeded successfully`);
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;

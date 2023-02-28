const { faker } = require("@faker-js/faker");
const {
  db,
  models: { User },
} = require("../server/db");

//This will create fakeData to seed the database

//Users

/**
 * @param  {integer} n
 * @returns an array of users
 */
function createUserArray(n) {
  let userArray = [];
  userArray.push(createAdmin());
  for (let i = 1; i < n; i++) {
    userArray.push(createUser());
  }
  return userArray;
}

/**
 * @returns a fake user object
 */
function createUser() {
  const password = faker.internet.password();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const username = faker.internet.email(
    firstName.toLowerCase(),
    lastName.toLowerCase()
  );
  const address = faker.address.streetAddress();
  const userType = "CUSTOMER";

  return {
    username,
    password,
    firstName,
    lastName,
    address,
    userType,
  };
}

/**
 * @returns an admin object
 */
function createAdmin() {
  const password = "administrator123";
  const firstName = "Grace";
  const lastName = "Shopper";
  const username = "info@graceshopper.com";
  const address = "100 admin road";
  const userType = "ADMIN";

  return {
    username,
    password,
    firstName,
    lastName,
    address,
    userType,
  };
}

async function userSeed() {
  await db.sync({ force: true }); // clears db and matches models to tables

  // Creating Users
  const numUsers = 100;
  const userArray = createUserArray(numUsers);
  const users = await User.bulkCreate(userArray);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users,
  };
}

userSeed();

module.exports = userSeed;

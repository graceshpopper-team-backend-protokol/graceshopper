// demo data to seed database with userdata
const { faker } = require("@faker-js/faker");
const {
  models: { User },
} = require("../server/db");

/**
 * function that creates a userarray based on the demo data provided below
 * @returns an array of users
 */
function createUserArray() {
  let userArray = [];
  userArray.push(createAdmin());
  userArray.push(createTestUser());
  for (let i = 1; i < 20; i++) {
    userArray.push(createUser());
  }
  return userArray;
}

/**
 * creates a fake user with details from the faker library
 * @returns {object} a fake user object
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
  const isAdmin = false;

  return {
    username,
    password,
    firstName,
    lastName,
    address,
    isAdmin,
  };
}

/**
 * creates a fake admin to test database options
 * @returns {object} an admin object
 */
function createAdmin() {
  const password = "administrator123";
  const firstName = "Grace";
  const lastName = "Shopper";
  const username = "info@graceshopper.com";
  const address = "100 admin road";
  const isAdmin = true;

  return {
    username,
    password,
    firstName,
    lastName,
    address,
    isAdmin,
  };
}

/**
 * creates a fake user to test database options
 * @returns {object} a test user object to test user login
 */
function createTestUser() {
  const password = "test123";
  const firstName = "Grace";
  const lastName = "Tester";
  const username = "graceshopper@tester.com";
  const address = "100 testing road";
  const isAdmin = false;

  return {
    username,
    password,
    firstName,
    lastName,
    address,
    isAdmin,
  };
}

/**
 * bulkcreates users in the database
 * @returns users
 */
async function userSeed() {
  // Creating Users
  const userArray = createUserArray();
  const users = await User.bulkCreate(userArray);

  return {
    users,
  };
}

module.exports = userSeed;

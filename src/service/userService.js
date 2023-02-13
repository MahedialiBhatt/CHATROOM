const userRepo = require("../repository/userRepo");

async function registerUser(name, userName, password) {
  return await userRepo.insertUser(name, userName, password);
}

async function getUserByUsername(userName) {
  return await userRepo.getUserByUsername(userName);
}

async function getUsersList() {
  return await userRepo.getUsersList();
}

module.exports = { registerUser, getUserByUsername, getUsersList };

const messageRepo = require("../repository/messageRepo");

async function getMessages() {
  return await messageRepo.getMessages();
}

async function insertMessages(username, message) {
  return await messageRepo.insertMessage(username, message);
}

module.exports = { getMessages, insertMessages };

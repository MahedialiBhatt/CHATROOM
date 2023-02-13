const messageService = require("../service/messageService");

async function getMessages(req, res) {
  try {
    const messages = await messageService.getMessages();
    res.send({ message: "Success", listOfmessages: messages });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

async function insertMessage(req, res) {
  try {
    const { username, message } = req.body;
    if (!message) {
      return res.status(400).send({
        error: "Bad Request, message field is missing in body request",
      });
    }
    const messageId = await messageService.insertMessages(username, message);
    res.send({ message: "Success", messageId: messageId });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

module.exports = { getMessages, insertMessage };

const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");
const authMiddleware = require("../middleware/auth");

router.get("/messages", authMiddleware.verifyToken, async (req, res) => {
  await messageController.getMessages(req, res);
});

router.post("/message", authMiddleware.verifyToken, async (req, res) => {
  await messageController.insertMessage(req, res);
});

module.exports = router;

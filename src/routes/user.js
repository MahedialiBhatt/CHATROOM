const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");

router.post("/register", authMiddleware.encryptPassword, async (req, res) => {
  await userController.registerUser(req, res);
});

router.post("/login", async (req, res) => {
  await userController.loginUser(req, res);
});

router.get("/users", authMiddleware.verifyToken, async (req, res) => {
  await userController.getRegiteredUsersList(req, res);
});

module.exports = router;

const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);

const authMiddleware = require("./src/middleware/auth");
const messageRouter = require("./src/routes/message");
const userRouter = require("./src/routes/user");
const messageRepo = require("./src/repository/messageRepo");
const PORT = 3000;

const io = socketio(server);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//ROUTER
app.use("/api", messageRouter);
app.use("/api", userRouter);

//SOCKET MIDDLEWARE
io.use(authMiddleware.verifySocketToken);

io.on("connection", (socket) => {
  const username = socket.handshake.query.username;
  console.log(username, "is Connected");

  socket.on("disconnect", () => {
    console.log(username, "is Disconnected");
  });

  socket.on("message", async (message) => {
    try {
      await messageRepo.insertMessage(username, message);
    } catch (err) {
      console.error("Error while storing message in DB");
    }

    console.log("-----------------");
    console.log(username, "Message is stored in DB");
    console.log("Received message from", username, "and message is", message);
    console.log("-----------------");

    // emit to all connected client and we are sending object which contains username and message
    io.emit("message", { username: username, message: message });
  });
});

server.listen(PORT, () => {
  console.log(`Chatroom Server Started On Port:${PORT}`);
});

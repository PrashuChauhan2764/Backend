
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../client")));
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

// Handle client connections
io.on("connection", (socket) => {

    console.log("User connected:", socket.id);

    // Join a classroom
    socket.on("join-room", (roomName) => {
        socket.join(roomName);

        console.log(`${socket.id} joined ${roomName}`);

        socket.to(roomName).emit("user-joined", socket.id);
    });

    // Receive and broadcast messages
    socket.on("send-message", (data) => {

        io.to(data.room).emit("receive-message", {
            sender: data.sender,
            message: data.message
        });

    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });

});



server.listen(3000, () => {
    console.log("Server running on port 3000");
});


const socket = io();

let currentRoom = "";
let username = "";

function joinRoom() {

    username = document.getElementById("username").value;
    currentRoom = document.getElementById("room").value;

    if (!username.trim() || !currentRoom.trim()) {
        alert("Enter your name and room");
        return;
    }

    socket.emit("join-room", currentRoom);
}

function sendMessage() {

    const message = document.getElementById("message").value;

    if (!message.trim() || !currentRoom) {
        return;
    }

    socket.emit("send-message", {
        sender: username,
        room: currentRoom,
        message: message
    });

    document.getElementById("message").value = "";
}

socket.on("receive-message", (data) => {

    const messages = document.getElementById("messages");

    const messageElement = document.createElement("p");

    messageElement.textContent =
        `${data.sender}: ${data.message}`;

    messages.appendChild(messageElement);
});

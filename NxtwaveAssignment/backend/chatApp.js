// Install required packages: npm install express socket.io mongoose
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

mongoose.connect('mongodb://localhost:27017/chatApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Message = mongoose.model('Message', {
  text: String,
});

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('sendMessage', (message) => {
    const newMessage = new Message({ text: message });
    newMessage.save().then(() => {
      io.emit('message', message);
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

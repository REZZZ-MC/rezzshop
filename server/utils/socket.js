// server/utils/socket.js
const socketIO = require('socket.io');

let io = null;

const initializeSocket = (server) => {
  io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

const getSocket = () => io;

module.exports = {
  initializeSocket,
  getSocket,
};
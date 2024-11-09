exports.sendMessage = (socket) => {
  socket.on('chatMessage', (message) => {
    // Process and save the message
    // Broadcast the message to other clients
    socket.broadcast.emit('chatMessage', message);
  });
};

// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const helmet = require('helmet');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Middleware
app.use(express.json());
app.use(passport.initialize());
app.use(helmet());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/rezzshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Socket.IO connection
io.on('connection', (socket) => {
  // Handle chat events
  socket.on('chatMessage', (message) => {
    // Broadcast the message to all connected clients
    io.emit('chatMessage', message);
  });
});

// Routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/products', require('./routes/productRoutes'));
app.use('/orders', require('./routes/orderRoutes'));
app.use('/chat', require('./routes/chatRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

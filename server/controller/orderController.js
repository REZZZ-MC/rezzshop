const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { name, email, address, items } = req.body;
    const newOrder = new Order({
      user: req.user._id,
      name,
      email,
      address,
      items,
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ user: userId });
    res.json(orders);
  } catch (error) {
    console.error('Error fetching user orders:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

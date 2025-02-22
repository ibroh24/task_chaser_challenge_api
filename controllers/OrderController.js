const OrderService = require("../services/OrderService");

exports.createOrder = async (req, res) => {
  try {
    const order = await OrderService.createOrder(req.user.id);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

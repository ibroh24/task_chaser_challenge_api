const CartService = require('../services/CartService');

exports.getCart = async (req, res) => {
  try {
    const cart = await CartService.getOrCreateCart(req.user.id);
    res.status(200).json({ status: true, cart });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    await CartService.addItemToCart(req.user.id, req.body.productId, req.body.quantity);
    res.status(200).json({ status: true, message: 'Item added to cart' });
  } catch (error) {
    res.status(400).json({ status: false, error: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    await CartService.removeItemFromCart(req.user.id, req.params.productId);
    res.status(200).json({ status: true, message: 'Item removed from cart' });
  } catch (error) {
    res.status(400).json({ status: false, error: error.message });
  }
};
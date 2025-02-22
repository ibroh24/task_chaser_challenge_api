const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/AuthMiddleware');
const CartController = require('../controllers/CartController');


router.get('/api/v1/cart/carts', authenticate, CartController.getCart);
router.post('/api/v1/cart/add-cart', authenticate, CartController.addToCart);
router.delete('/api/v1/cart/remove-cart/:productId', authenticate, CartController.removeFromCart);


module.exports = router;
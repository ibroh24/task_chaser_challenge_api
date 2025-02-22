const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/AuthMiddleware');
const OrderController = require('../controllers/OrderController');


router.post('/api/v1/order/checkout', authenticate, OrderController.createOrder);

module.exports = router;
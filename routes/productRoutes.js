const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/AuthMiddleware');
const ProductController = require('../controllers/ProductController');


router.get('/api/v1/product/products',  ProductController.getProducts);
router.get('/api/v1/product/get-product/:id',  ProductController.getProduct);


router.post('/api/v1/product/add-product', ProductController.saveProduct);

module.exports = router;
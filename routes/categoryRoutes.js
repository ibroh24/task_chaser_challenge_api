const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');


// this is meant for testing, it is an admin service to add a new product & category
router.post('/api/v1/category/add-category', CategoryController.createCategory);
router.get('/api/v1/category/categories', CategoryController.getCategories);


module.exports = router;
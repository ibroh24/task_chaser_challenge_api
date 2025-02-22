const ProductService = require('../services/ProductService');

exports.getProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    res.status(200).json({ status: true, data: products });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    product ? res.status(200).json({ status: true, data: product }) : res.status(404).json({ status: false, message: 'Product not found' });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// this is used to add a new product for testing purposes
exports.saveProduct = async (req, res) => {
  try {
    const product = await ProductService.saveProduct(req.body);
    res.status(201).json({ status: true, data: product });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

const Product  = require('../models').Product;


class ProductService {
  async getAllProducts() {
    return await Product.findAll();
  }

  async getProductById(id) {
    return await Product.findByPk(id);
  }

  async saveProduct(productData) {
    return await Product.create(productData);
  }
}

module.exports = new ProductService();
const Category  = require('../models').Category;


class CategoryService {
  async createCategory(categoryData) {
    return await Category.create(categoryData);
  }

  async getAllCategories() {
    return await Category.findAll();
  }

  async getCategoryById(id) {
    return await Category.findByPk(id);
  }

  /*
  async updateCategory(id, updateData) {
    const category = await Category.findByPk(id);
    if (!category) throw new Error('Category not found');
    return await category.update(updateData);
  }

  async deleteCategory(id) {
    const category = await Category.findByPk(id);
    if (!category) throw new Error('Category not found');
    return await category.destroy();
  }
  */
 
}

module.exports = new CategoryService();
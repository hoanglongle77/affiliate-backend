const CategoryRepository = require("./category.repository");

exports.getCategories = async () => {
  return await CategoryRepository.getAllCategories();
};

exports.getCategoryById = async (id) => {
  return await CategoryRepository.getCategoryById(id);
};

exports.createCategory = async (category) => {
  return await CategoryRepository.createCategory(category);
};

exports.updateCategoryById = async (id, updateData) => {
  return await CategoryRepository.updateCategory(id, updateData);
};

exports.deleteCategory = async (id) => {
  return await CategoryRepository.deleteCategory(id);
};

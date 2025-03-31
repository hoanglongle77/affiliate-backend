const productRepository = require("./product.repository");

exports.getProducts = async () => {
  return await productRepository.findAll();
};

exports.getProductById = async (id) => {
  return await productRepository.findById(id);
};
exports.createProduct = async (product) => {
  return await productRepository.create(product);
};
exports.updateProductById = async (id, updateData) => {
  return await productRepository.updateById(id, updateData);
};
exports.deleteProductById = async (id) => {
  return await productRepository.deleteById(id);
};

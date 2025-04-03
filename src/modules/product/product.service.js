const ProductRepository = require("./product.repository");

exports.getProducts = async () => {
  return await ProductRepository.getAllProducts();
};

exports.getProductById = async (id) => {
  return await ProductRepository.getProductById(id);
};

exports.createProduct = async (product) => {
  return await ProductRepository.createProduct(product);
};

exports.updateProductById = async (id, updateData) => {
  return await ProductRepository.updateProduct(id, updateData);
};

exports.deleteProductById = async (id) => {
  return await ProductRepository.deleteProduct(id);
};

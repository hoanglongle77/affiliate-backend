const Product = require("./product.model");

exports.findAll = () => Product.find();
exports.findById = (id) => Product.findById(id);
exports.create = (product) => Product.create(product);
exports.updateById = (id, updateData) =>
  Product.findByIdAndUpdate(id, updateData, { new: true });
exports.deleteById = (id) => Product.findByIdAndDelete(id);

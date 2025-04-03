const Product = require("./product.model");

class ProductRepository {
  async getAllProducts() {
    return await Product.find().populate("category");
  }
  async getProductById(id) {
    return await Product.findById(id).populate("category");
  }
  async createProduct(data) {
    return await Product.create(data);
  }
  async updateProduct(id, data) {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  }
  async deleteProduct(id) {
    return Product.findByIdAndDelete(id);
  }
}

module.exports = new ProductRepository();

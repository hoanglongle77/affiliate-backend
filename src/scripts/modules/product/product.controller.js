const ProductService = require("./product.service");

exports.getProducts = async (req, res) => {
  try {
    const products = await ProductService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products", error });
  }
};

exports.getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductService.getProductById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving product", error });
  }
};

exports.createProduct = async (req, res) => {
  const product = req.body;
  try {
    const newProduct = await ProductService.createProduct(product);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

exports.updateProductById = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  try {
    const updatedProduct = await ProductService.updateProductById(
      id,
      updateData
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

exports.deleteProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await ProductService.deleteProductById(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};

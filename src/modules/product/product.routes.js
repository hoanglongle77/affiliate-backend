const express = require("express");
const validation = require("./product.validation");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} = require("./product.controller");
const router = express.Router();

// Define routes for product operations
router.get("/", getProducts); // Get all products
router.get("/:id", validation.productId, getProductById); // Get a product by ID
router.post("/", validation.createProduct, createProduct); // Create a new product
router.put("/:id", validation.updateProduct, updateProductById); // Update a product by ID
router.delete("/:id", deleteProductById); // Delete a product by ID

module.exports = router;

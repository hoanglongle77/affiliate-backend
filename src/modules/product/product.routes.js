const express = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} = require("./product.controller");
const router = express.Router();

router.get("/", getProducts); // Get all products
router.get("/:id", getProductById); // Get a product by ID
router.post("/", createProduct); // Create a new product
router.put("/:id", updateProductById); // Update a product by ID
router.delete("/:id", deleteProductById); // Delete a product by ID

module.exports = router;

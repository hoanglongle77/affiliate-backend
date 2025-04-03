const express = require("express");
const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
} = require("./category.controller");
const router = express.Router();

router.get("/", getCategories); // Get all categories
router.get("/:id", getCategoryById); // Get a category by ID
router.post("/", createCategory); // Create a new category
router.put("/:id", updateCategoryById); // Update a category by ID
router.delete("/:id", deleteCategoryById); // Delete a category by ID

module.exports = router;

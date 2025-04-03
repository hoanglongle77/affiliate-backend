const CategoryService = require("./category.service");

exports.getCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving categories", error });
  }
};

exports.getCategoryById = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await CategoryService.getCategoryById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving category", error });
  }
};

exports.createCategory = async (req, res) => {
  const category = req.body;
  try {
    const newCategory = await CategoryService.createCategory(category);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: "Error creating category", error });
  }
};

exports.updateCategoryById = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  try {
    const updatedCategory = await CategoryService.updateCategoryById(
      id,
      updateData
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: "Error updating category", error });
  }
};

exports.deleteCategoryById = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedCategory = await CategoryService.deleteCategory(id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error });
  }
};

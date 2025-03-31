const { body, param } = require("express-validator");

exports.createProduct = [
  body("name").notEmpty().withMessage("Product name is required"),
  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a number greater than 0"),
  body("stock")
    .isInt({ min: 0 })
    .withMessage("Stock must be an integer greater than or equal to 0"),
  body("category").notEmpty().withMessage("Category is required"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
  body("brand").optional().isString().withMessage("Brand must be a string"),
  body("images")
    .optional()
    .isArray()
    .withMessage("Images must be an array of strings"),
  body("images.*")
    .optional()
    .isString()
    .withMessage("Each image must be a string"),
  body("affiliateLinks")
    .optional()
    .isArray()
    .withMessage("Affiliate links must be an array"),
  body("affiliateLinks.*.platform")
    .optional()
    .isString()
    .withMessage("Affiliate link platform must be a string"),
  body("affiliateLinks.*.url")
    .optional()
    .isURL()
    .withMessage("Affiliate link URL must be a valid URL"),
  body("metaTitle")
    .optional()
    .isString()
    .withMessage("Meta title must be a string"),
  body("metaDescription")
    .optional()
    .isString()
    .withMessage("Meta description must be a string"),
  body("keywords")
    .optional()
    .isArray()
    .withMessage("Keywords must be an array of strings"),
  body("keywords.*")
    .optional()
    .isString()
    .withMessage("Each keyword must be a string"),
];

exports.updateProduct = [
  param("id").isMongoId().withMessage("Invalid product ID"),
  body("name")
    .optional()
    .isString()
    .withMessage("Product name must be a string"),
  body("price")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("Price must be a number greater than 0"),
  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Stock must be an integer greater than or equal to 0"),
  body("category")
    .optional()
    .isString()
    .withMessage("Category must be a string"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
  body("brand").optional().isString().withMessage("Brand must be a string"),
  body("images")
    .optional()
    .isArray()
    .withMessage("Images must be an array of strings"),
  body("images.*")
    .optional()
    .isString()
    .withMessage("Each image must be a string"),
  body("affiliateLinks")
    .optional()
    .isArray()
    .withMessage("Affiliate links must be an array"),
  body("affiliateLinks.*.platform")
    .optional()
    .isString()
    .withMessage("Affiliate link platform must be a string"),
  body("affiliateLinks.*.url")
    .optional()
    .isURL()
    .withMessage("Affiliate link URL must be a valid URL"),
  body("metaTitle")
    .optional()
    .isString()
    .withMessage("Meta title must be a string"),
  body("metaDescription")
    .optional()
    .isString()
    .withMessage("Meta description must be a string"),
  body("keywords")
    .optional()
    .isArray()
    .withMessage("Keywords must be an array of strings"),
  body("keywords.*")
    .optional()
    .isString()
    .withMessage("Each keyword must be a string"),
];

exports.productId = [param("id").isMongoId().withMessage("Invalid product ID")];

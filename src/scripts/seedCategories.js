require("dotenv").config();
const connectDB = require("../config/db"); // Import kết nối database
const Category = require("../modules/category/category.model");
const slugify = require("slugify");

// Sample category data
const categories = [
  { name: "Electronics" },
  { name: "Fashion" },
  { name: "Home Appliances" },
];

// Seed categories
const seedCategories = async () => {
  try {
    // Kết nối database
    await connectDB();
    console.log("✅ Kết nối MongoDB thành công!");

    // Xóa dữ liệu cũ trước khi seed
    await Category.deleteMany();
    console.log("🗑️ Dữ liệu cũ đã bị xóa!");

    // Tạo slug cho từng danh mục
    const categoriesWithSlug = categories.map((category) => ({
      ...category,
      slug: slugify(category.name, { lower: true, strict: true }),
    }));

    // Chèn dữ liệu mới
    await Category.insertMany(categoriesWithSlug);
    console.log("🚀 Đã thêm dữ liệu danh mục thành công!");

    // Thoát chương trình
    process.exit();
  } catch (error) {
    console.error("❌ Lỗi khi seed dữ liệu:", error);
    process.exit(1);
  }
};

seedCategories();

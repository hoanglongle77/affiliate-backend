require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");
const productRoutes = require("./modules/product/product.routes");
const categoryRoutes = require("./modules/category/category.routes");
const app = express();

// 1. Database connection
connectDB();

// 2. Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

// 3. Error handling middleware
app.use(errorHandler);

// 4.API Routes
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

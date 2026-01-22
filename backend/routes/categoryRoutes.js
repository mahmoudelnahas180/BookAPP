/**
 * @file categoryRoutes.js
 * @description تعريف مسارات API الخاصة بالتصنيفات (Categories).
 */

const express = require('express');
const categoryrouter = express.Router();
const asyncWrapper = require("../utils/asyncWrapper");
const CategoryController = require("../controller/categoryController");

/**
 * @route POST /categories
 * @description إضافة تصنيف جديد.
 */
categoryrouter.post('/categories', asyncWrapper(CategoryController.addCategory));

module.exports = categoryrouter;
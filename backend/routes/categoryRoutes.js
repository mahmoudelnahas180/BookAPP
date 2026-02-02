/**
 * @file categoryRoutes.js
 * @description تعريف مسارات API الخاصة بالتصنيفات (Categories).
 */

const express = require("express");
const categoryrouter = express.Router();
const asyncWrapper = require("../utils/asyncWrapper");
const CategoryController = require("../controller/categoryController");

/**
 * @route POST /categories
 * @description إضافة تصنيف جديد.
 */
categoryrouter.post("/", asyncWrapper(CategoryController.addCategory));

/**
 * @route GET /categories
 * @description الحصول على جميع التصنيفات.
 */
categoryrouter.get("/", asyncWrapper(CategoryController.getAllCategories));

/**
 * @route GET /categories/:id
 * @description الحصول على تصنيف بـ ID.
 */
categoryrouter.get("/:id", asyncWrapper(CategoryController.getCategoryById));

/**
 * @route PUT /categories/:id
 * @description تحديث تصنيف بـ ID.
 */
categoryrouter.put("/:id", asyncWrapper(CategoryController.updateCategory));

/**
 * @route DELETE /categories/:id
 * @description حذف تصنيف بـ ID.
 */
categoryrouter.delete("/:id", asyncWrapper(CategoryController.deleteCategory));

module.exports = categoryrouter;

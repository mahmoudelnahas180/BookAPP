/**
 * @file categoryController.js
 * @description وحدة التحكم الخاصة بالتصنيفات (Category Controller).
 * تتيح للمسؤولين إضافة تصنيفات جديدة للكتب.
 */

const asyncWrapper = require("../utils/asyncWrapper");
const Category = require("../models/CategorySchame");

class CategoryController {
  /**
   * @function addCategory
   * @description إنشاء تصنيف جديد.
   * @route POST /categories
   * @param {Object} req - يحتوي على { name }.
   */
  async addCategory(req, res) {
    const { name, imageUri } = req.body;
    const category = await Category.findOne({ name });
    if (category) {
      return res.status(400).json({ message: "Category already exists" });
    }
    if (!name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCategory = new Category({
      name,
      imageUri,
    });

    await newCategory.save();
    res
      .status(201)
      .json({ message: "Category added successfully", category: newCategory });
  }
  /**
   * @function getAllCategories
   * @description الحصول على جميع التصنيفات.
   * @route GET /categories
   */
  async getAllCategories(req, res) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    const totalCategories = await Category.countDocuments();
    const pages = Math.ceil(totalCategories / limit);

    const categories = await Category.find().skip(skip).limit(limit);

    if (!categories) {
      return res.status(404).json({ message: "Categories not found" });
    }
    res.status(200).json({ categories, page, limit, totalCategories, pages });
  }
  /**
   * @function getCategoryById
   * @description الحصول على تصنيف بـ ID.
   * @route GET /categories/:id
   */
  async getCategoryById(req, res) {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ category });
  }
  /**
   * @function updateCategory
   * @description تحديث تصنيف بـ ID.
   * @route PUT /categories/:id
   */
  async updateCategory(req, res) {
    const { id } = req.params;
    const { name, imageUri } = req.body;
    const category = await Category.findByIdAndUpdate(
      id,
      { name, imageUri },
      { new: true },
    );
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ category });
  }
  /**
   * @function deleteCategory
   * @description حذف تصنيف بـ ID.
   * @route DELETE /categories/:id
   */
  async deleteCategory(req, res) {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  }
}
module.exports = new CategoryController();

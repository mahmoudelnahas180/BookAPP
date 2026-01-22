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
         const { name } = req.body;
          
          if (!name) {
            return res.status(400).json({ message: "All fields are required" });
          }
          
          const newCategory = new Category({
            name
          });
          
          await newCategory.save();
          res.status(201).json({ message: "Category added successfully", category: newCategory });
    }
}
module.exports = new CategoryController();
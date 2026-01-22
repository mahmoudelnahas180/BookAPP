/**
 * @file CategorySchame.js
 * @description مخطط بيانات التصنيفات.
 * يستخدم لتجميع الكتب تحت أقسام معينة (مثل: روايات، تقنية، تاريخ).
 */

const mongoose = require('mongoose');

const CategorySchame = new mongoose.Schema({
 // اسم التصنيف
 name: {
    type: String,
   },
})

module.exports = mongoose.model('Category', CategorySchame);
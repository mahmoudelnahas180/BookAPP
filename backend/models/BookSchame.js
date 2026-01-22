/**
 * @file BookSchame.js
 * @description مخطط بيانات الكتاب (Book Schema) في قاعدة البيانات.
 * يحدد خصائص الكتاب وعلاقاته.
 */

const mongoose = require('mongoose');

const BookSchame = new mongoose.Schema({
 // عنوان الكتاب
 title: {
    type: String,
    require: true
   },
 // اسم المؤلف
 author: {
    type: String,
    require: true
   },
 // وصف الكتاب
 description: {
    type: String,
    require: true
   },
 // السعر
 price: {
    type: Number,
    require: true
   },
 // المخزون (الكمية المتاحة)
 stock: {
    type: Number,
    require: true,
    default: 0
   },
   // علاقة ربط بجدول التصنيفات (Foreign Key)
   category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
   },
   // هل الكتاب مميز؟ (يعرض في الصفحة الرئيسية مثلاً)
   isFeatured: {
    type: Boolean,
    default: false
   },
   
   // هل يوجد خصم؟
   isSale: {
    type: Boolean,
    default: false
   },
   // نسبة الخصم
   discountParcent: {
    type: String, // يفضل تغييره لـ Number لاحقاً للحسابات
    default: false
   },
   // رابط صورة الغلاف
   coverImage: {
    type: String

   }

})

module.exports = mongoose.model('Book', BookSchame);
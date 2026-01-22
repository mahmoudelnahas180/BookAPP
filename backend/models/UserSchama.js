/**
 * @file UserSchama.js
 * @description يمثل هذا الملف نموذج بيانات المستخدم (User Schema) في قاعدة البيانات MongoDB.
 * يحدد هيكل البيانات، القيود (Validation)، والأنواع لكل حقل.
 *
 * المسؤولية:
 * 1. تحديد شكل وثيقة المستخدم (User Document).
 * 2. فرض قيود مثل البريد الإلكتروني الفريد والإلزامي.
 * 3. تحديد أدوار المستخدمين (User Roles).
 */

const mongoose = require("mongoose");

// تعريف مخطط المستخدم (Schema)
const UserSchame = new mongoose.Schema({
   // اسم المستخدم
   name: {
      type: String
      // يمكن إضافة {required: true} هنا مستقبلاً لضمان وجود الاسم
   },

   // البريد الإلكتروني (يستخدم لتسجيل الدخول)
   email: {
    type: String,
    require: true, // حقل إجباري
    unique: true   // يمنع تكرار البريد الإلكتروني في قاعدة البيانات
   },

   // كلمة المرور (يتم تخزينها مشفرة)
   password: {
    type: String,
    require: true // حقل إجباري
   },

   // دور المستخدم (للتحكم في الصلاحيات)
   role: {
    type: String,
    enum: ["user", "admin"], // القيم المسموح بها فقط
    default: "user"          // القيمة الافتراضية عند الإنشاء
   }
   
})

// تصدير النموذج ليتم استخدامه في وحدات التحكم (Controllers)
// اسم المجموعة في قاعدة البيانات سيكون: users (تلقائياً من Mongoose)
module.exports = mongoose.model("User", UserSchame);
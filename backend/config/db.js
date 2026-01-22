/**
 * @file db.js
 * @description ملف إعداد وإنشاء الاتصال بقاعدة البيانات MongoDB.
 * يستخدم مكتبة Mongoose لتسهيل التعامل مع قاعدة البيانات.
 */

const mongoose = require("mongoose");
require('dotenv').config();

/**
 * @function connectDB
 * @description دالة غير متزامنة لفتح الاتصال بقاعدة البيانات.
 * تقرأ رابط الاتصال من متغيرات البيئة (Mongo_Uri).
 */
const connectDB = async () => {
    await mongoose.connect(process.env.Mongo_Uri).then(() => {
        console.log("Connected to DB successfully");
    }).catch((err) => {
        console.error("Database connection failed:", err);
    });
}
module.exports = connectDB;
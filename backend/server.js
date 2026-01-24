/**
 * @file server.js
 * @description نقطة الدخول للسيرفر (Server Entry Point).
 * يقوم بإعداد السيرفر، ربط قاعدة البيانات، وتعريف المسارات (Routes) والـ Middlewares.
 */

const express = require('express');
require('dotenv').config(); // تحميل متغيرات البيئة
const cors = require("cors"); // مكتبة للسماح بطلبات من مصادر خارجية (Cross-Origin Resource Sharing)
const connectDB = require('./config/db'); // دالة الاتصال بقاعدة البيانات
const userrouter = require('./routes/userRouter'); // مسارات المستخدمين

const app = express();
const port = process.env.port || 5000; // تحديد المنفذ (Port)

// --- Middlewares ---
app.use(cors()); // تفعيل CORS
app.use(express.json()); // تفعيل استقبال البيانات بصيغة JSON

// --- Routes (المسارات) ---
app.use('/books', require('./routes/bookRoutes')); // مسارات الكتب
app.use('/', require('./routes/categoryRoutes')); // مسارات التصنيفات
app.use('/', userrouter); // مسارات المستخدم (تسجيل، دخول) - وضعت في النهاية لأن فيها wildcard (/:id)

// --- Database Connection ---
connectDB(); // بدء الاتصال بقاعدة البيانات

// --- Start Server (تشغيل السيرفر) ---
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
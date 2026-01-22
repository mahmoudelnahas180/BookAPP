/**
 * @file userRouter.js
 * @description تعريف مسارات API الخاصة بالمستخدمين.
 * يتم ربط كل مسار بدالة التحكم المناسبة من UserController.
 */

const express = require('express');
const userrouter = express.Router();
const asyncWrapper = require("../utils/asyncWrapper"); // أداة معالجة الأخطاء
const UserController = require('../controller/UserController'); // وحدة التحكم

/**
 * @route POST /register
 * @description تسجيل مستخدم جديد.
 */
userrouter.post('/register', asyncWrapper(UserController.UserRegister));

/**
 * @route POST /signin
 * @description تسجيل الدخول.
 */
userrouter.post('/signin', asyncWrapper(UserController.UserSignIn));

/**
 * @route GET /:id
 * @description جلب بيانات مستخدم عن طريق الـ ID.
 */
userrouter.get('/:id', asyncWrapper(UserController.getUserById));

module.exports = userrouter;
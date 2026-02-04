/**
 * @file userRouter.js
 * @description تعريف مسارات API الخاصة بالمستخدمين.
 * يتم ربط كل مسار بدالة التحكم المناسبة من UserController.
 */

const express = require("express");
const userrouter = express.Router();
const asyncWrapper = require("../utils/asyncWrapper"); // أداة معالجة الأخطاء
const UserController = require("../controller/UserController"); // وحدة التحكم

/**
 * @route POST /register
 * @description تسجيل مستخدم جديد.
 */
userrouter.post("/register", asyncWrapper(UserController.UserRegister));

/**
 * @route POST /signin
 * @description تسجيل الدخول.
 */
userrouter.post("/signin", asyncWrapper(UserController.UserSignIn));

/**
 * @route GET /users/:id
 * @description جلب بيانات مستخدم عن طريق الـ ID.
 */
userrouter.get("/users/:id", asyncWrapper(UserController.getUserById));

/**
 * @route GET /users
 * @description جلب جميع المستخدمين.
 */
userrouter.get("/users", asyncWrapper(UserController.getAllUsers));

/**
 * @route DELETE /users/:id
 * @description حذف مستخدم.
 */
userrouter.delete("/users/:id", asyncWrapper(UserController.deleteUser));

/**
 * @route PATCH /users/:id/ban
 * @description حظر/فك حظر مستخدم.
 */
userrouter.patch(
  "/users/:id/ban",
  asyncWrapper(UserController.toggleBanStatus),
);

/**
 * @route PATCH /users/:id/role
 * @description تغيير دور مستخدم.
 */
userrouter.patch(
  "/users/:id/role",
  asyncWrapper(UserController.changeUserRole),
);

module.exports = userrouter;

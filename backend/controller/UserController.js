/**
 * @file UserController.js
 * @description وحدة التحكم الخاصة بالمستخدمين (User Controller).
 * تحتوي على المنطق البرمجي (Business Logic) الخاص بالمصادقة وإدارة المستخدمين.
 * 
 * المسؤوليات:
 * 1. تسجيل مستخدم جديد (Register).
 * 2. تسجيل الدخول (Login) وإصدار رموز JWT.
 * 3. جلب بيانات المستخدمين.
 */

const asyncWrapper = require("../utils/asyncWrapper"); // أداة لتغليف الدوال غير المتزامنة (لمعالجة الأخطاء)
const User = require("../models/UserSchama"); // استيراد نموذج المستخدم للتفاعل مع قاعدة البيانات
const bcrypt = require('bcrypt'); // مكتبة لتشفير كلمات المرور ومقارنتها
const jwt = require("jsonwebtoken"); // مكتبة لإنشاء والتحقق من رموز JSON Web Tokens
const util = require('util');
const signAsync = util.promisify(jwt.sign); // تحويل دالة التوقيع لتعمل بنظام الـ Promise
require('dotenv').config(); // تحميل متغيرات البيئة من ملف .env

// تكرار التحميل كما في الكود الأصلي
require('dotenv').config();

class UserController {
  
  /**
   * @function UserRegister
   * @description تسجيل حساب مستخدم جديد.
   * @route POST /register
   * @param {Object} req - طلب الـ HTTP (يحتوي على email, password, name في الـ body).
   * @param {Object} res - استجابة الـ HTTP.
   * @param {Function} next - دالة الانتقال للـ Middleware التالي.
   * 
   * الخطوات:
   * 1. التحقق من صحة المدخلات.
   * 2. التحقق مما إذا كان المستخدم موجوداً مسبقاً.
   * 3. تشفير كلمة المرور.
   * 4. حفظ المستخدم في قاعدة البيانات.
   * 5. إنشاء رمز دخول (Token) وإرساله.
   */
  async UserRegister(req, res, next) {
    const { email, password, name } = req.body;
    
    // 1. التحقق من المدخلات (Validation)
    if (!email || !password || !name) {
      return res.status(400).json({ message: "email and password are required" });
    }

    // 2. التحقق من وجود المستخدم
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User Already Exists" });

    // 3. تشفير كلمة المرور (Hashing)
    const hashPassword = await bcrypt.hash(password, 10);

    // 4. إنشاء وثيقة المستخدم الجديدة وحفظها
    const newUser = new User({
      name,
      email,
      password: hashPassword
    });
    await newUser.save();

    // 5. إنشاء الرمز (Token)
    // Payload: يحمل البيانات المهمة غير الحساسة (email, id)
    let token = await signAsync({ email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1w' });
    
    // إرسال الاستجابة بنجاح
    res.status(201).json({ message: "User Registered successfully", user: newUser, token: token });
  }

  /**
   * @function UserSignIn
   * @description تسجيل دخول مستخدم موجود.
   * @route POST /login
   * @param {Object} req - (email, password).
   * 
   * الخطوات:
   * 1. التحقق من المدخلات.
   * 2. البحث عن المستخدم بالبريد الإلكتروني.
   * 3. مقارنة كلمة المرور المدخلة مع المشفرة.
   * 4. إنشاء رمز دخول (Token) يحتوي على الدور (Role).
   */
  async UserSignIn(req, res, next) {
    const { email, password } = req.body;
    
    // 1. التحقق من المدخلات
    if (!email || !password) {
      return res.status(400).json({ message: "email and password are required" });
    }
    
    // 2. البحث عن المستخدم
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user Not exisit " });
    }

    // 3. مقارنة كلمة المرور
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "User Not exisit " });
    }

    // 4. إنشاء الرمز (Token)
    let token = await signAsync({ email, id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1w' });
    res.status(201).json({ message: "User Login successfully", user: user, token: token });
  }

  /**
   * @function getUserById
   * @description جلب بيانات مستخدم محدد بواسطة معرفه.
   * @route GET /users/:id
   * @param {Object} req - يحتوي على id في الـ params.
   */
  async getUserById(req, res, next) {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({ message: "User Found", user: user });
  }

}
module.exports = new UserController();
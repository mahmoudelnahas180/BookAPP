/**
 * @file bookRoutes.js
 * @description تعريف مسارات API الخاصة بالكتب.
 * يشمل عمليات CRUD: إضافة، عرض، تعديل، وحذف الكتب.
 */

const express = require("express");
const bookrouter = express.Router();
const asyncWrapper = require("../utils/asyncWrapper");
const BookController = require("../controller/bookController");

const verifyToken = require("../middlewares/verifyToken");
const allowedTo = require("../middlewares/allowedTo");

/**
 * @route POST /books
 * @description إضافة كتاب جديد.
 */
// أي مستخدم مسجل يمكنه إضافة كتاب
bookrouter.post("/books", verifyToken, asyncWrapper(BookController.addBook));

/**
 * @route GET /getbooks
 * @description جلب جميع الكتب.
 */
bookrouter.get("/getbooks", asyncWrapper(BookController.getAllBooks));

/**
 * @route GET /getlastfourbooks
 * @description جلب آخر 4 كتب تم إضافتها.
 */
bookrouter.get(
  "/getlastfourbooks",
  asyncWrapper(BookController.getLastFourBooks),
);
/**
 * @route GET /books/:id
 * @description جلب كتاب محدد بواسطة الـ ID.
 */
bookrouter.get("/books/:id", asyncWrapper(BookController.getBookById));

/**
 * @route PUT /books/:id
 * @description تعديل بيانات كتاب موجود.
 */
// التعديل حالياً متاح للأدمن أو صاحب الكتاب (يمكن تحسينه في الكونترولر)
// للتبسيط، سنجعله متاحاً للمسجلين، والكونترولر يمكنه التحقق إذا لزم الأمر،
// ولكن "الموافقة/الرفض" هي تحديث للحالة، وتتطلب أدمن.
// سنضيف verifyToken هنا.
bookrouter.put(
  "/books/:id",
  verifyToken,
  asyncWrapper(BookController.updateBook),
);

/**
 * @route DELETE /books/:id
 * @description حذف كتاب.
 */
bookrouter.delete(
  "/books/:id",
  verifyToken,
  allowedTo("admin"),
  asyncWrapper(BookController.deleteBook),
);

module.exports = bookrouter;

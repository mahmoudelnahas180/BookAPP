/**
 * @file bookRoutes.js
 * @description تعريف مسارات API الخاصة بالكتب.
 * يشمل عمليات CRUD: إضافة، عرض، تعديل، وحذف الكتب.
 */

const express = require("express");
const bookrouter = express.Router();
const asyncWrapper = require("../utils/asyncWrapper");
const BookController = require("../controller/bookController");

/**
 * @route POST /books
 * @description إضافة كتاب جديد.
 */
bookrouter.post("/books", asyncWrapper(BookController.addBook));

/**
 * @route GET /getbooks
 * @description جلب جميع الكتب.
 */
bookrouter.get("/getbooks", asyncWrapper(BookController.getAllBooks));

/**
 * @route GET /getlastfivebooks
 * @description جلب آخر 5 كتب تم إضافتها.
 */
bookrouter.get(
  "/getlastfivebooks",
  asyncWrapper(BookController.getLastFiveBooks),
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
bookrouter.put("/books/:id", asyncWrapper(BookController.updateBook));

/**
 * @route DELETE /books/:id
 * @description حذف كتاب.
 */
bookrouter.delete("/books/:id", asyncWrapper(BookController.deleteBook));

module.exports = bookrouter;

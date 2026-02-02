/**
 * @file bookController.js
 * @description وحدة التحكم الخاصة بالكتب (Book Controller).
 * مسؤولة عن جميع العمليات المتعلقة بالكتب: إضافة، عرض، تعديل، وحذف.
 */

const asyncWrapper = require("../utils/asyncWrapper");
const Book = require("../models/BookSchame");
const bcrypt = require("bcrypt"); // (ملاحظة: قد لا يكون ضرورياً هنا إلا إذا كان هناك منطق خاص)
const jwt = require("jsonwebtoken");
const util = require("util");
const signAsync = util.promisify(jwt.sign);
require("dotenv").config();

require("dotenv").config();

class BookController {
  /**
   * @function addBook
   * @description إضافة كتاب جديد إلى قاعدة البيانات.
   * @route POST /books
   * @param {Object} req - بيانات الكتاب (title, author, price, etc.).
   *
   * الخطوات:
   * 1. التحقق من أن جميع الحقول المطلوبة موجودة.
   * 2. إنشاء كائن كتاب جديد.
   * 3. حفظ الكتاب في قاعدة البيانات.
   */
  async addBook(req, res) {
    const {
      title,
      author,
      description,
      price,
      stock,
      isFeatured,
      category,
      isSale,
      discountParcent,
      coverImage,
    } = req.body;
    // التحقق من المدخلات الأساسية
    if (
      !title ||
      !author ||
      !description ||
      price === undefined ||
      stock === undefined ||
      !category
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // إنشاء وثيقة الكتاب
    const newBook = new Book({
      title,
      author,
      description,
      price,
      stock,
      isFeatured,
      category,
      isSale,
      discountParcent,
      coverImage,
    });

    await newBook.save();
    res.status(201).json({ message: "Book added successfully", book: newBook });
  }
  /** 
     * @function getLastFourBooks
     * @description جلب آخر 4 كتب تم إضافتها.
     * @route GET /getlastfourbooks
        
    */
  async getLastFourBooks(req, res) {
    const books = await Book.find().sort({ createdAt: -1 }).limit(4);
    res.status(200).json({ books });
  }

  /**
   * @function getAllBooks
   * @description جلب قائمة جميع الكتب.
   * @route GET /getbooks
   * تقوم بعمل Populate لحقل التصنيف (Category) لجلب بياناته التفصيلية.
   */
  async getAllBooks(req, res) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Build query object
    const query = {};
    if (req.query.category) {
      query.category = req.query.category;
    }

    const numberOfBook = await Book.countDocuments(query);
    const pages = Math.ceil(numberOfBook / limit);

    const books = await Book.find(query)
      .populate("category")
      .sort({ createdAt: -1 }) // Sort by newest by default
      .skip(skip)
      .limit(limit);

    res.status(200).json({ books, page, limit, numberOfBook, pages });
  }

  /**
   * @function getBookById
   * @description جلب تفاصيل كتاب واحد.
   * @param {String} id - معرف الكتاب في الرابط.
   */
  async getBookById(req, res) {
    const { id } = req.params;
    const book = await Book.findById(id).populate("category");

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ book });
  }

  /**
   * @function updateBook
   * @description تحديث بيانات كتاب موجود.
   * @route PUT /books/:id
   * يقوم بتحديث الحقول المرسلة فقط، ويبقي الحقول الأخرى كما هي.
   */
  async updateBook(req, res) {
    const { id } = req.params;
    const {
      title,
      author,
      description,
      price,
      stock,
      isFeatured,
      category,
      isSale,
      discountParcent,
      coverImage,
    } = req.body;

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // تحديث الحقول إذا تم إرسال قيم جديدة، وإلا الاحتفاظ بالقديم
    book.title = title || book.title;
    book.author = author || book.author;
    book.description = description || book.description;
    book.price = price || book.price;
    book.stock = stock || book.stock;
    book.isFeatured = isFeatured !== undefined ? isFeatured : book.isFeatured;
    book.category = category || book.category;
    book.isSale = isSale !== undefined ? isSale : book.isSale;
    book.discountParcent = discountParcent || book.discountParcent;
    book.coverImage = coverImage || book.coverImage;

    await book.save();
    res.status(200).json({ message: "Book updated successfully", book });
  }

  /**
   * @function deleteBook
   * @description حذف كتاب من النظام.
   * @route DELETE /books/:id
   */
  async deleteBook(req, res) {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  }
}
module.exports = new BookController();

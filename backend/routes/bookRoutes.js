const express=require('express')
const bookrouter=express.Router()
const asyncWrapper = require("../utils/asyncWrapper");
const BookController=require('../controller/bookController')

bookrouter.post('/books',asyncWrapper(BookController.addBook))
bookrouter.get('/getbooks',asyncWrapper(BookController.getAllBooks))
bookrouter.get('/books/:id',asyncWrapper(BookController.getBookById))
bookrouter.put('/books/:id',asyncWrapper(BookController.updateBook))
bookrouter.delete('/books/:id',asyncWrapper(BookController.deleteBook))
module.exports=bookrouter
const asyncWrapper = require("../utils/asyncWrapper");
const Book=require("../models/BookSchame")
const bcrypt=require('bcrypt')
const jwt = require("jsonwebtoken");
const util= require('util')
const signAsync = util.promisify(jwt.sign);
require('dotenv').config()

require('dotenv').config()
class BookController{
  
    async addBook(req,res){
         const {title,author,description,price,stock,isFeatured,category}=req.body
          if(!title || !author || !description || !price || !stock || !category){
            return res.status(400).json({message:"All fields are required"})
          }
          const newBook=new Book({
            title,
            author,
            description,
            price,
            stock,
            isFeatured,
            category
          })
          await newBook.save()
          res.status(201).json({message:"Book added successfully",book:newBook})
    }
    async getAllBooks(req,res){
        const books=await Book.find().populate('category')
        res.status(200).json({books})
    }
    async getBookById(req,res){
        const {id}=req.params
        const book=await Book.findById(id).populate('category')
        if(!book){
            return res.status(404).json({message:"Book not found"})
        }
        res.status(200).json({book})
    }
    async updateBook(req,res){
        const {id}=req.params
        const {title,author,description,price,stock,isFeatured,category}=req.body
        const book=await Book.findById(id)
        if(!book){
            return res.status(404).json({message:"Book not found"})
        }           
        book.title=title || book.title
        book.author=author || book.author
        book.description=description || book.description
        book.price=price || book.price
        book.stock=stock || book.stock
        book.isFeatured=isFeatured || book.isFeatured
        book.category=category || book.category
        await book.save()
        res.status(200).json({message:"Book updated successfully",book})
    }
    async deleteBook(req,res){
        const {id}=req.params
        const book=await Book.findById(id)
        if(!book){
            return res.status(404).json({message:"Book not found"})
        }
        await book.remove()
        res.status(200).json({message:"Book deleted successfully"})
    }
        
}
module.exports=new BookController()
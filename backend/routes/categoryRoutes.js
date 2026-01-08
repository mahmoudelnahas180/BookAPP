const express=require('express')
const categoryrouter=express.Router()
const asyncWrapper = require("../utils/asyncWrapper");
const CategoryController=require("../controller/categoryController")

categoryrouter.post('/categories',asyncWrapper(CategoryController.addCategory))

module.exports=categoryrouter
const express=require('express')
const userrouter=express.Router()
const asyncWrapper = require("../utils/asyncWrapper");
const UserController=require('../controller/UserController')

userrouter.post('/register',asyncWrapper(UserController.UserRegister))
userrouter.post('/signin',asyncWrapper(UserController.UserSignIn))
userrouter.get('/:id',asyncWrapper(UserController.getUserById))
module.exports=userrouter
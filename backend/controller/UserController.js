const asyncWrapper = require("../utils/asyncWrapper");
const User=require("../models/UserSchama")
const bcrypt=require('bcrypt')
const jwt = require("jsonwebtoken");
const util= require('util')
const signAsync = util.promisify(jwt.sign);
require('dotenv').config()

require('dotenv').config()
class UserController{
  
  async UserRegister(req,res,next){
  const {email,password,name}=req.body
  if(!email||!password||!name){
      return res.status(400).json({message:"email and password are required"})

  }
  const user= await User.findOne({email})
  if(user)return res.status(400).json({message:"User Already Exists"})
  const hashPassword=await bcrypt.hash(password,10)
   const newUser=new User({name,
    email,password:hashPassword
   })  
      await newUser.save()

   let token=await signAsync({email,id:newUser._id},process.env.JWT_SECRET,{expiresIn:'1w'})
   res.status(201).json({message:"User Registered successfully",user:newUser,token:token})
}
async UserSignIn(req,res,next){
   const {email,password}=req.body
  if(!email||!password){
      return res.status(400).json({message:"email and password are required"})

  }
    const user= await User.findOne({email})
 if(!user){
       return res.status(400).json({message:"user Not exisit "})
 }
 const passwordMatch=await bcrypt.compare(password ,user.password)
 if(!passwordMatch){
       return res.status(400).json({message:"User Not exisit "})
 }

 let token=await signAsync({email,id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1w'})
 res.status(201).json({message:"User Login successfully",user:user,token:token})

}
async getUserById(req,res,next){
   const {id}=req.params
   const user= await User.findById(id)
   if(!user){
      return res.status(404).json({message:"User Not Found"})
   }
   res.status(200).json({message:"User Found",user:user})
}

}
module.exports=new UserController()
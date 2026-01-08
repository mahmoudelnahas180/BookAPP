const asyncWrapper = require("../utils/asyncWrapper");
const Category=require("../models/CategorySchame")


class CategoryController{
  
    async addCategory(req,res){
         const {name}=req.body
          if(!name){
            return res.status(400).json({message:"All fields are required"})
          }
          const newCategory=new Category({
            name
          })
          await newCategory.save()
          res.status(201).json({message:"Category added successfully",category:newCategory})
    }
}
module.exports=new CategoryController()
const mongoose=require('mongoose')

const CategorySchame=new mongoose.Schema({
 name:{
    type:String,
   },


})



module.exports=mongoose.model('Category',CategorySchame)
const mongoose=require("mongoose")
const UserSchame=new mongoose.Schema({
   name:{
      type:String
   },
   email:{
    type:String,
    require:true,
    unique:true
   },
   password:{
    type:String,
    require:true
   }
})
module.exports=mongoose.model("User",UserSchame)
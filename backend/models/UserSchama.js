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
   },
   role:{
    type:String,
    enum:["user","admin"],
    default:"user"
   }
   
})
module.exports=mongoose.model("User",UserSchame)
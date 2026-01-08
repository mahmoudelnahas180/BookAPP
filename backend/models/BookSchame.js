const mongoose=require('mongoose')

const BookSchame=new mongoose.Schema({
 title:{
    type:String,
    require:true
   },
 author:{
    type:String,
    require:true
   },
 description:{
    type:String,
    require:true
   },
 price:{
    type:Number,
    require:true
   },
 stock:{
    type:Number,
    require:true,
    default:0
   },
   category:{
    type:mongoose.Schema.Types.ObjectId , ref:"Category"
   },
   isFeatured:{
    type:Boolean,
    default:false
   },
   
   isSale:{
    type:Boolean,
    default:false
   },
   discountParcent:{
    type:String,
    default:false
   },
   coverImage:{
    type:String

   }

})



module.exports=mongoose.model('Book',BookSchame)
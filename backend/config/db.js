const mongoose =require("mongoose")
require('dotenv').config();

const connectDB=async()=>{
    await mongoose.connect(process.env.Mongo_Uri).then(()=>{
        console.log("conned to db")
    })
}
module.exports=connectDB
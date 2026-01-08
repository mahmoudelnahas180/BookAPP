const express=require('express');
require('dotenv').config();
const cors=require("cors")
const connectDB=require('./config/db')
const userrouter=require('./routes/userRouter')
const app=express();
const port=process.env.port || 5000;
app.use(cors())
app.use(express.json())
app.use('/',userrouter)
app.use('/books',require('./routes/bookRoutes'))
app.use('/',require('./routes/categoryRoutes'))
// connect to database
connectDB()
// run server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
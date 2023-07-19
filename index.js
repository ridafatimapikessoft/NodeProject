const express = require('express')
const mongoose=require('mongoose')
const connectToMongoDB =require('./dbconnection')
const UserRoute = require('./routes/user')
const {user,testUser}=require('./tests/crud.test');
const app = express()
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
const port = 5000;
//import isEven from './tests/sum.test';
//const mathOperations = require('./tests/sum.test');
   //DB Operations
   const sum=require ('./tests/sum.test');
   console.log(user);
// Call the async function to establish the MongoDB connection
//connectToMongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/user',UserRoute)
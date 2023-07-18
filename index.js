const express = require('express')
const mongoose=require('mongoose')
const connectToMongoDB =require('./dbconnection')
const app = express()
const UserRoute = require('./routes/user')
const port = 5000;

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); 
//import isEven from './tests/sum.test';
//const mathOperations = require('./tests/sum.test');
   //DB Operations
// Call the async function to establish the MongoDB connection
//connectToMongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/user',UserRoute)
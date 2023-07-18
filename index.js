const express = require('express')
const mongoose=require('mongoose')
const connectToMongoDB =require('./dbconnection')
const app = express()
const port = 5000;
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


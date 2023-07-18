const express = require('express')
const mongoose=require('mongoose')
const connectToMongoDB =require('./dbconnection')
const UserRoute = require('./routes/user')
const app = express()
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
const port = 5000;



app.use('/user',UserRoute)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


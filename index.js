const express = require('express')
const mongoose=require('mongoose')
const connectToMongoDB =require('./dbconnection')
const UserRoute = require('./routes/user')
const swaggerJsdoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');
const app = express()
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
const port = 5000;
//import isEven from './tests/sum.test';
//const mathOperations = require('./tests/sum.test');
   //DB Operations
   const sum=require ('./tests/sum.test');

// Call the async function to establish the MongoDB connection
//connectToMongoDB();
const options={
  definition:{
    openapi:'3.0.0',
    info:
    {
      title:'Node Project for handling user accounts and information',
      version:'1.0.0'
    },
    servers:[
      {
        url:'http://localhost:5000/'
      }
    ]
  },
  apis:['./routes/user.js']
}
const swaggerSpec=swaggerJsdoc(options);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
/**
 * @swagger
 * /api/getusers:
 * get:
 *     summary: To get all users from mongodb 
 *     description: THis api is used to fetch data from mongodb 
 *     responses:
 *           200:
 *               description: this api is used to  fetch data from mongodb
 *                content: 
 *                        application/json
 * 
 */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/user',UserRoute)
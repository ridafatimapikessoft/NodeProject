const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node Project for handling user accounts and information',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['routes/user.js'],
};
const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
/**
 * @swagger
 * tags:
 *   name: UserCRUD
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         phone:
 *           type: string
 */

/**
 * @swagger
 * /user/api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve all users from the database
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /user/api/users/{id}:
 *   get:
 *     summary: Get a single user
 *     description: Retrieve specific user from the database
 *     parameters: 
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID required
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A specific user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
/**
 * @swagger
 * /user/api/users:
 *   post:
 *     summary: Add a user
 *     description: Add user to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Added successfully
 */
/**
 * @swagger
 * /user/api/users/{id}:
 *   put:
 *     summary: Update a single user
 *     description: Update specific user from the database
 *     parameters: 
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID required
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Updated successfully using put
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /user/api/users/{id}:
 *   patch:
 *     summary: Update a single user
 *     description: Update specific user from the database
 *     parameters: 
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID required
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Updated successfully using patch
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */


/**
 * @swagger
 * /user/api/users/{id}:
 *   delete:
 *     summary: Delete a specific user
 *     description: Delete specific user from the database
 *     parameters: 
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID required
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted successfully
 */
router.get('/api/users', UserController.findAll);
router.get('/api/users/:id', UserController.findOne);
router.post('/api/users/', UserController.create);
router.patch('/api/users/:id', UserController.update);
router.put('/api/users/:id', UserController.update);
router.delete('/api/users/:id', UserController.destroy);

module.exports = router;

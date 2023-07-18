const express = require('express')
const UserController = require('../controllers/user')
const router = express.Router();
router.post('/', UserController.create);
router.get('/', UserController.findAll);
//router.post('/', UserController.create);

module.exports = router
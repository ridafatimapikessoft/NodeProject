const express = require('express')
const UserController = require('../controllers/user')
const router = express.Router();
<<<<<<< HEAD
router.post('/', UserController.create);
router.get('/', UserController.findAll);
//router.post('/', UserController.create);
=======
router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne);
router.post('/', UserController.create);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.destroy);
>>>>>>> master

module.exports = router
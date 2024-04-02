const express = require('express');
const { body, validationResult } = require('express-validator');
const usersController = require('../controllers/usersController'); 
const {verifyToken} = require('../middleware/verifyToken');
const router = express.Router();
const { validate, userValidation } = require('../middleware/validate');

// Route to get all users
router.get('/', verifyToken, usersController.index);
// Route to create a new user, with validation
router.post('/', userValidation, validate, usersController.createUser);
// Route to update an existing user
router.put('/:id', verifyToken, userValidation, validate, usersController.updateUser);
// Route to delete a user
router.delete('/:id', verifyToken, usersController.deleteUser);
// Route to login a user
router.post('/login', usersController.login);

module.exports = router;

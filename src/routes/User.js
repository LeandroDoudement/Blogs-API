const express = require('express');

const router = express.Router();

const userController = require('../controllers/User');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('../middlewares/validateUser');

const { validateToken } = require('../middlewares/validateToken');

router.post(
  '/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  userController.createUser,
);

router.get('/', validateToken, userController.getUsers);

router.get('/:id', validateToken, userController.getUserById);

module.exports = router;

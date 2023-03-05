const express = require('express');

const router = express.Router();

const userController = require('../controllers/User');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('../middlewares/validateUser');

router.post(
  '/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  userController.createUser,
);

module.exports = router;

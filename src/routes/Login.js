const express = require('express');

const router = express.Router();

const LoginController = require('../controllers/Login');

router.post('/', LoginController.validateUser);

module.exports = router;
const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/Category');

const { validateToken } = require('../middlewares/validateToken');

const { validateName } = require('../middlewares/validateCategory');

router.post(
  '/',
  validateToken,
  validateName,
  categoryController.createCategory,
);

router.get('/', validateToken, categoryController.getAll);

module.exports = router;

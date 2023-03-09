const express = require('express');

const router = express.Router();

const PostController = require('../controllers/Post');

const { validateFields, validateCategoryIds } = require('../middlewares/validatePost');

const { validateToken } = require('../middlewares/validateToken');

router.post('/', validateToken, validateFields, validateCategoryIds, PostController.createPost);

router.get('/', validateToken, PostController.getAllPosts);

router.get('/:id', validateToken, PostController.getPostById);

module.exports = router;
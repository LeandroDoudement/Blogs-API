const { BlogPost, PostCategory } = require('../models');

const createPost = async (post) => {
  const { categoryIds } = post;
  const newPost = await BlogPost.create(post);
  const postCategories = categoryIds.map((categoryId) => ({
      postId: newPost.id,
      categoryId,
  }));
  await PostCategory.bulkCreate(postCategories);
  return newPost;
};

  module.exports = { createPost };

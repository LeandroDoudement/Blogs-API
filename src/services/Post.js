const { BlogPost, PostCategory, User, Category } = require('../models');

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

const getAllPosts = async () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

  module.exports = { createPost, getAllPosts };

const PostServices = require('../services/Post');

const createPost = async (req, res) => {
    const { title, content, categoryIds, data: { id: userId } } = req.body;
    try {
        const newPost = await PostServices
        .createPost({ title, content, categoryIds, userId });
        res.status(201).json(newPost);
    } catch (error) {
    return res.status(500).json({ message: error.message });
    }
};

const getAllPosts = async (_req, res) => {
    try {
        const allPosts = await PostServices.getAllPosts();
        res.status(200).json(allPosts);
    } catch (error) {
    return res.status(500).json({ message: error.message });
    }
};

module.exports = { createPost, getAllPosts };
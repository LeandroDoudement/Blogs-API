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

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await PostServices.getPostById(id);
        if (!post) return res.status(404).json({ message: 'Post does not exist' });
        return res.status(200).json(post);
    } catch (error) {
    return res.status(500).json({ message: error.message });
    }
};

module.exports = { createPost, getAllPosts, getPostById };
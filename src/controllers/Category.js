const categoryService = require('../services/Category');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    await categoryService.createCategory({ name });
    const category = await categoryService.getByName(name);
    res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const categories = await categoryService.getAll();
    res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createCategory, getAll };

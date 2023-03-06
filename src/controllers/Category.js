const categoryService = require('../services/Category');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
    await categoryService.createCategory({ name });
    const category = await categoryService.getByName(name);
    res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createCategory };

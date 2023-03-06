const { Category } = require('../models');

const createCategory = async (category) => Category.create(category);

const getByName = async (name) => Category.findOne({ where: { name } });

module.exports = { createCategory, getByName };

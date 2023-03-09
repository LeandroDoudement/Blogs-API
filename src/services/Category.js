const { Category } = require('../models');

const createCategory = async (category) => Category.create(category);

const getByName = async (name) => Category.findOne({ where: { name } });

const getAll = async () => Category.findAll();

const getCategories = async (categoryIds) =>
  Category.findAndCountAll({ where: { id: categoryIds } });

module.exports = { createCategory, getByName, getAll, getCategories };

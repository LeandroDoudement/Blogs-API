const { Category } = require('../models');

const createCategory = async (category) => Category.create(category);

const getByName = async (name) => Category.findOne({ where: { name } });

const getAll = async () => Category.findAll();

module.exports = { createCategory, getByName, getAll };

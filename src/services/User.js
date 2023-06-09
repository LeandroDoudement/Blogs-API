const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) => {
    User.create({ displayName, email, password, image });
};

const getUsers = async () => User.findAll({ attributes: { exclude: 'password' } });

const getUserById = async (id) => User.findByPk(id, { attributes: { exclude: 'password' } });

module.exports = { createUser, getUsers, getUserById };
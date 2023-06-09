const jwt = require('jsonwebtoken');
const userService = require('../services/User');

const { JWT_SECRET } = process.env;

const createUser = (req, res) => {
    const { displayName, email, password, image } = req.body;
    userService.createUser({ displayName, email, password, image });
    const payload = {
        email,
        admin: false,
      };
      const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '1h',
      });
      return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getUsers, getUserById };
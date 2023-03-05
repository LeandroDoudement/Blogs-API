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

module.exports = { createUser };
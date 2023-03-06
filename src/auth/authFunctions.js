const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { verifyToken };
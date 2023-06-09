const { User } = require('../models');

const validateDisplayName = (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }

    next();
};

const validateEmail = async (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  const checkIfEmailExists = await User.findOne({ where: { email } });
  if (checkIfEmailExists) return res.status(409).json({ message: 'User already registered' }); 
  next();
};

const validatePassword = (req, res, next) => {
    const { password } = req.body;
    if (password.length < 6) {
        return res.status(400)
        .json({ message: '"password" length must be at least 6 characters long' });
    }

    next();
};

module.exports = { validateDisplayName, validateEmail, validatePassword };
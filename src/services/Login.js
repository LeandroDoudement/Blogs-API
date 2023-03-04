const { User } = require('../models');

const validateUser = async ({ email, password }) => {
const validation = await User.findOne({ where: { email, password } });
  return validation;
};

module.exports = { validateUser };
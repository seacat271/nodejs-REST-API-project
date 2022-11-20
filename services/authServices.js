const { User } = require("../db/userModel");
const { NotAuthorizedError } = require("../helpers/errors");

// const { checkByID } = require('../helpers/checkByID');

const register = async (email, password) => {
  const user = new User({email, password});
  await user.save();
  return user;
};

const login = async () => {};

const logout = async () => {};

module.exports = {
  register,
  login,
  logout,
};

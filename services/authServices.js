const { User } = require("../db/userModel");
const { NotAuthorizedError } = require("../helpers/errors");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

// const { checkByID } = require('../helpers/checkByID');

const register = async (email, password) => {
  const user = new User({email, password});
  await user.save();
  return user;
};

const login = async (email, password) => {
  const user = await User.findOne({email});
if (!user) {
  throw new NotAuthorizedError("Email or password is wrong")
}
if(!await bcrypt.compare(password, user.password)) {
  throw new NotAuthorizedError("Email or password is wrong")
}
const token = jwt.sign({
  _id: user._id,
  subscription: user.subscription,
}, process.env.JWT_SECRET);
return token
};

const logout = async () => {};

module.exports = {
  register,
  login,
  logout,
};

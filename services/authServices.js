const { User } = require("../db/userModel");

const { NotAuthorizedError, ConflictEmailError } = require("../helpers/errors");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

// const { checkByID } = require('../helpers/checkByID');

const register = async (email, password) => {
  if (await User.findOne({ email })) {
    throw new ConflictEmailError("Email in use");
  }
  const user = new User({ email, password });
  const newUser = await user.save();
  return { user: { email: newUser.email, subscription: newUser.subscription } };
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotAuthorizedError("Email or password is wrong");
  }
  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError("Email or password is wrong");
  }
  const token = jwt.sign(
    {
      _id: user._id,
      subscription: user.subscription,
    },
    process.env.JWT_SECRET
  );
  const updateUser = await User.findByIdAndUpdate(
    user._id,
    { $set: { token } },
    { returnDocument: "after" }
  );
  return {
    token,
    user: { email: updateUser.email, subscription: updateUser.subscription },
  };
};

const logout = async () => {};

module.exports = {
  register,
  login,
  logout,
};

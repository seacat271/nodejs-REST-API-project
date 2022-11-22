const { User } = require("../db/userModel");
const { NotAuthorizedError, ConflictEmailError } = require("../helpers/errors");
const { checkPassword } = require("../helpers/cryptPassword");
const { tokenCreate } = require("../helpers/tokenHelper");

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
  await checkPassword(password, user.password)
  const token = tokenCreate({
    _id: user._id,
    subscription: user.subscription,
  })
  
  ;
  const updateUser = await User.findByIdAndUpdate(
    user._id,
    { $set: { token } },
    { returnDocument: "after" }
  );
  return {token, user: { email: updateUser.email, subscription: updateUser.subscription }};
};

const logout = async (userId) => {
  await User.findByIdAndUpdate(userId, { $set: { token: null} })
  return
};

const currentUser = async (userId) => {
  const userById = await User.findById(userId)
  return {email: userById.email, subscription: userById.subscription}
}

module.exports = {
  register,
  login,
  logout,
  currentUser,
};

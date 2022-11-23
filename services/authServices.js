const { User } = require("../db/userModel");
const { checkPassword } = require("../helpers/cryptPassword");
const { tokenCreate } = require("../helpers/tokenHelper");
const { findCheckUserByEmail } = require("../helpers/checkUserByEmail");

const register = async (email, password) => {
  await findCheckUserByEmail(email, "Email in use")
  const user = new User({ email, password });
  const newUser = await user.save();
  return { user: { email: newUser.email, subscription: newUser.subscription } };
};

const login = async (email, password) => {
  const user = await findCheckUserByEmail(email, "Email or password is wrong");
  await checkPassword(password, user.password)
  const token = tokenCreate({_id: user._id, subscription: user.subscription});
  const updateUser = await User.findByIdAndUpdate(user._id, { $set: { token }}, { returnDocument: "after" });
  return {token, user: { email: updateUser.email, subscription: updateUser.subscription }};
};

const logout = async (userId) => {
  await User.findByIdAndUpdate(userId, { $set: { token: null} })
};

const currentUser = async (userId) => {
  const userById = await User.findById(userId)
  return {email: userById.email, subscription: userById.subscription}
}

const changeUSubscription = async (userId, {subscription}) => {
  const token = tokenCreate({_id: userId, subscription})
  const updateUser = await User.findByIdAndUpdate(
    userId,
    { $set: { subscription, token } },
    { returnDocument: "after" }
  );
  return {token, user: { email: updateUser.email, subscription: updateUser.subscription }};
}

module.exports = {
  register,
  login,
  logout,
  currentUser,
  changeUSubscription,
};

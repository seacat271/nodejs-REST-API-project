const { register } = require("../services/authServices");

const registerController = async (req, res) => {
  const { email, password } = req.body;
  user = await register(email, password);
  return res.status(201).json(user);
};
const loginController = () => {};
const logoutController = () => {};

module.exports = {
  registerController,
  loginController,
  logoutController,
};

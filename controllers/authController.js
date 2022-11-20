const { register, login } = require("../services/authServices");

const registerController = async (req, res) => {
  const { email, password } = req.body;
  user = await register(email, password);
  return res.status(201).json(user);
};
const loginController = async (req, res) => {
    const { email, password } = req.body;
    token = await login(email, password);
    return res.json(token);
};
const logoutController =async () => {};

module.exports = {
  registerController,
  loginController,
  logoutController,
};

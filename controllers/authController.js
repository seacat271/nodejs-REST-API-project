const { register, login, logout, currentUser } = require("../services/authServices");

const registerController = async (req, res) => {
    const { email, password } = req.body;
    user = await register(email, password);
    return res.status(201).json(user);
};
const loginController = async (req, res) => {
    const { email, password } = req.body;
    user = await login(email, password);
    return res.json(user);
};
const logoutController = async (req, res) => {
    const {_id: userId} = req.user;
    await logout(userId);
    return res.status(204).json()
};
const currentUserController = async (req, res) => {
    const {_id: userId} = req.user;
    const userById = await currentUser(userId)
    return res.json(userById)
}

module.exports = {
  registerController,
  loginController,
  logoutController,
  currentUserController,
};

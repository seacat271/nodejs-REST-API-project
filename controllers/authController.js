const { register, login, logout, currentUser, changeUSubscription } = require("../services/authServices");

const registerController = async (req, res) => {
    const { email, password } = req.body;
    const user = await register(email, password);
    res.status(201).json(user);
};
const loginController = async (req, res) => {
    const { email, password } = req.body;
    const user = await login(email, password);
    res.json(user);
};
const logoutController = async (req, res) => {
    const {_id: userId} = req.user;
    await logout(userId);
    res.status(204).json()
};
const currentUserController = async (req, res) => {
    const {_id: userId} = req.user;
    const userById = await currentUser(userId)
   res.json(userById)
}

const subscriptionController = async (req, res) => {
  const {_id: userId} = req.user;
  const {subscription} = req.body;
  const updateUser = await changeUSubscription(userId, {subscription})
  res.json(updateUser) 
}

module.exports = {
  registerController,
  loginController,
  logoutController,
  currentUserController,
  subscriptionController,
};

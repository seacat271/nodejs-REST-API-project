const { register, login, logout, currentUser, changeUSubscription, avatarUpload, verification } = require("../services/authServices");

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

const avatarUploadController = async (req, res) => {
  const {_id: userId} = req.user;
  const {path: avatarURL} = req.file;
  const avatarUser = await avatarUpload(avatarURL, userId)
  res.json(avatarUser)
}

const verificationController = async (req, res) => {
  const {verificationToken} = req.params;
  const result = await verification(verificationToken)
  console.log(result)
  res.json()
}

const repeatedlyVerificationController = async (req, res) => {
  
}

module.exports = {
  registerController,
  loginController,
  logoutController,
  currentUserController,
  subscriptionController,
  avatarUploadController,
  verificationController,
  repeatedlyVerificationController,
};

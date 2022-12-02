const express = require("express");
const {
    authValidation,
    subscriptionValidation,
  } = require("../../middlewares/validation");

const {
    registerController,
    loginController,
    logoutController,
    currentUserController,
    subscriptionController,
    avatarUploadController,
} = require("../../controllers/authController");

const { asyncWrapper } = require("../../helpers/asyncWrapper");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const multer = require('multer');
const path = require('path');
const { imageHandler } = require("../../middlewares/imageHandler");

const DIR_FILE = path.resolve('./tmp') 
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, DIR_FILE)
    },
    filename: (req, file, callback) => {
        const [filename, extension] = file.originalname.split('.')
        callback(null, `${filename}.${extension}`)
    }
});

const uploadMiddleware = multer({storage})



const router = express.Router();

router.post("/register", authValidation, asyncWrapper(registerController));

router.post("/login", authValidation, asyncWrapper(loginController));

router.post("/logout", authMiddleware, asyncWrapper(logoutController));

router.get("/current", authMiddleware, asyncWrapper(currentUserController));

router.patch("/", authMiddleware, subscriptionValidation, asyncWrapper(subscriptionController))

router.patch("/avatars", authMiddleware, uploadMiddleware.single("avatar"), imageHandler, asyncWrapper(avatarUploadController))

module.exports = router;
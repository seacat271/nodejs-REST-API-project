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
} = require("../../controllers/authController");

const { asyncWrapper } = require("../../helpers/asyncWrapper");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", authValidation, asyncWrapper(registerController));

router.post("/login", authValidation, asyncWrapper(loginController));

router.post("/logout", authMiddleware, asyncWrapper(logoutController));

router.get("/current", authMiddleware, asyncWrapper(currentUserController));

router.patch("/", authMiddleware, subscriptionValidation, asyncWrapper(subscriptionController))

module.exports = router;
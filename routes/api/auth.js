const express = require("express");
const {
    authValidation,
  } = require("../../middlewares/validation");
const {
    registerController,
    loginController,
    logoutController,
} = require("../../controllers/authController");

const { asyncWrapper } = require("../../helpers/asyncWrapper");

const router = express.Router();

router.post("/register", authValidation, asyncWrapper(registerController));

router.post("/login", authValidation, asyncWrapper(loginController));

router.post("/logout", asyncWrapper(logoutController));

module.exports = router;
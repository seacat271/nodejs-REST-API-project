const express = require("express");
const {
    registerValidation,
  } = require("../../middlewares/validation");
const {
    registerController,
    loginController,
    logoutController,
} = require("../../controllers/authController");

const { asyncWrapper } = require("../../helpers/asyncWrapper");

const router = express.Router();

router.post("/register", registerValidation, asyncWrapper(registerController));

router.post("/login", asyncWrapper(loginController));

router.post("/logout", asyncWrapper(logoutController));

module.exports = router;
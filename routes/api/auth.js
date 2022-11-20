const express = require("express");
const {
    registerValidation,
  } = require("../../middlewares/validation");
const {
} = require("../../controllers/contactsController");

const { asyncWrapper } = require("../../helpers/asyncWrapper");

const router = express.Router();

router.post("/register", registerValidation, asyncWrapper(registrationController));

router.post("/login", asyncWrapper(loginController));

module.exports = router;
const express = require("express");
const {
} = require("../../controllers/contactsController");

const { asyncWrapper } = require("../../helpers/asyncWrapper");

const router = express.Router();

router.post("/registration", asyncWrapper(registrationController));

router.post("/login", asyncWrapper(loginController));

module.exports = router;
const express = require("express");
const {
  contactValidation,
} = require("../../middlewares/validation");
const {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactController,
} = require("../../controllers/contactsController");
const { asyncWrapper } = require("../../helpers/asyncWrapper");

const router = express.Router();

router.get("/", asyncWrapper(getContactsController));

router.get("/:contactId", asyncWrapper(getContactByIdController));

router.post("/", contactValidation, asyncWrapper(postContactController));

router.delete("/:contactId", asyncWrapper(deleteContactController));

router.put("/:contactId", contactValidation, asyncWrapper(putContactController));

module.exports = router;

const express = require("express");
const {
  addContactValidation,
  putContactValidation,
} = require("../../middlewares/validation");
const {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactController,
} = require("../../controllers/contactsController");
const router = express.Router();

router.get("/", getContactsController);

router.get("/:contactId", getContactByIdController);

router.post("/", addContactValidation, postContactController);

router.delete("/:contactId", deleteContactController);

router.put("/:contactId", putContactValidation, putContactController);

module.exports = router;

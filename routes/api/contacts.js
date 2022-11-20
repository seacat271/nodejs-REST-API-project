const express = require("express");
const {
  contactValidation,
  patchStatusValidation,
} = require("../../middlewares/validation");

const {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactController,
  statusContactController,
} = require("../../controllers/contactsController");
const { asyncWrapper } = require("../../helpers/asyncWrapper");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const router = express.Router();
router.use(authMiddleware);
router.get("/", asyncWrapper(getContactsController));

router.get("/:contactId", asyncWrapper(getContactByIdController));

router.post("/", contactValidation, asyncWrapper(postContactController));

router.delete("/:contactId", asyncWrapper(deleteContactController));

router.put("/:contactId", contactValidation, asyncWrapper(putContactController));

router.patch("/:contactId/favorite", patchStatusValidation, asyncWrapper(statusContactController));

module.exports = router;
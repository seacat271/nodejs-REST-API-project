const express = require('express');
const {addContactValidation, putContactValidation} = require("../../middlewares/validation")
const {getContacts, getContactById, postContact, deleteContact, putContact} = require('../../controllers/contactsController')
const router = express.Router()

router.get('/', getContacts)

router.get('/:contactId', getContactById)

router.post('/', addContactValidation, postContact)

router.delete('/:contactId', deleteContact)

router.put('/:contactId', putContactValidation, putContact)

module.exports = router;

const express = require('express');
const Joi = require('joi');
const {listContacts,
  getById,
  removeContact,
  addContact,
  updateContact} = require('../../models/contacts')

const router = express.Router()

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

router.get('/', async (req, res, next) => {
  
const contacts = await listContacts()
  res.json(contacts)
})



router.get('/:contactId', async (req, res, next) => {
  const {contactId} = req.params;
  const contactByID = await getById(contactId)
  contactByID ? res.json(contactByID) : res.status(404).json({"message": "Not found"}) 
})

router.post('/', async (req, res, next) => {
  if (req.body.phone && req.body.email && req.body.name) {
    const newContact = await addContact(req.body);
    res.status(201).json(newContact)
  } else {
    // res.status(400).json({"message": "missing required name field",})
  }
  // const {phone, email,name} = req.body;

  validationResult = schema.validate(req.body);
  if(validationResult.error) {
    res.status(400).json({"message": "missing required name field",})
  }
})

router.delete('/:contactId', async (req, res, next) => {
  const message = await removeContact(req.params.contactId);
  message ? res.json(message) : res.status(404).json({"message": "Not found"})
  
})

router.put('/:contactId', async (req, res, next) => {
  validationResult = schema.validate(req.body);
  if(validationResult.error) {
    res.status(400).json({"message": "missing fields"})
  }
  const {contactId} = req.params;
  const updateData = await updateContact(contactId, req.body)
  updateData ? res.json(updateData) : res.status(404).json({"message": "Not found"})
})

module.exports = router

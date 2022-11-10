const express = require('express');
const Joi = require('joi');
const {listContacts,
  getById,
  removeContact,
  addContact,
  updateContact} = require('../../models/contacts')

const router = express.Router()

router.get('/', async (req, res, next) => {
  
const contacts = await listContacts()
  res.status(200).json(contacts)
})

router.get('/:contactId', async (req, res, next) => {
  const {contactId} = req.params;
  const contactByID = await getById(contactId)
  contactByID ? res.status(200).json(contactByID) : res.status(404).json({"message": "Not found"}) 
})

router.post('/', async (req, res, next) => {
  if (req.body.phone && req.body.email && req.body.name) {
    const newContact = await addContact(req.body);
    res.status(201).json(newContact)
  } else {
    res.status(400).json({"message": "missing required name field",})
  }
})

router.delete('/:contactId', async (req, res, next) => {
  const message = await removeContact(req.params.contactId);
  message ? res.status(200).json(message) : res.status(404).json({"message": "Not found"})
  
})

router.put('/:contactId', async (req, res, next) => {
  if (Object.keys(req.body).length === 0) return res.status(400).json({"message": "missing fields"})
  const {contactId} = req.params;
  const updateData = await updateContact(contactId, req.body)
    updateContact ? res.status(200).json(updateData) : res.status(404).json({"message": "Not found"})
})

module.exports = router

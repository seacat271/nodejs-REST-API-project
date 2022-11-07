const express = require('express')
const {listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact} = require('../../models/contacts')

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await listContacts())
})

router.get('/:contactId', async (req, res, next) => {
  const {contactId} = req.params
  res.json(await getContactById(contactId))
})

router.post('/', async (req, res, next) => {
  const {name, phone, email} = req.body;
  res.json(await addContact(name, phone, email))
})

router.delete('/:contactId', async (req, res, next) => {
  res.json(await removeContact(req.params.id))
})

router.put('/:contactId', async (req, res, next) => {
  res.json(await updateContact())
})

module.exports = router

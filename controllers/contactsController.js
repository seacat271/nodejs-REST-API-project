// const {listContacts,
//     getById,
//     removeContact,
//     addContact,
//     updateContact} = require('../models/contacts');
const {
  getContacts,
  getContactById,
  addContact,
  changeContactById,
  deleteContactById,
} = require("../services/contactsServices");

const getContactsController = async (req, res) => {
  const contacts = await getContacts();
  res.json(contacts);
};

const getContactByIdController = async (req, res) => {
    const {contactId} = req.params
  const contactByID = await getContactById(contactId);
  res.json(contactByID);
};

const postContactController = async (req, res) => {
    const {phone, email, name} = req.body
  const newContact = await addContact({phone, email, name});
  res.status(201).json(newContact);
};

const deleteContactController = async (req, res) => {
    const {contactId} = req.params;
    await deleteContactById(contactId);
    res.json({ message: "contact deleted" })
};

const putContactController = async (req, res) => {
  const { phone, email, name } = req.body;
  const { contactId } = req.params;
  const contactByID = await Contact.findById(contactId);
  await Contact.findByIdAndUpdate(contactId, { $set: { phone, email, name } });
  const updateContact = await Contact.findById(contactId);
  contactByID
    ? res.json(updateContact)
    : res.status(404).json({ message: "Not found" });
};

module.exports = {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactController,
};

const { Contact } = require("../db/postModel");
const { checkContactByID } = require("../helpers/checkContactByID");

const getContacts = async (owner) => {
  const contacts = await Contact.find({ owner });
  return contacts;
};

const getContactById = async (id) => {
  await checkContactByID(Contact, id);
  const contactByID = await Contact.findById(id);
  return contactByID;
};

const addContact = async ({ phone, email, name, favorite, owner }) => {
  const newContact = new Contact({ phone, email, name, favorite, owner });
  await newContact.save();
  return newContact;
};

const changeContactById = async (id, { phone, email, name }) => {
  await checkContactByID(Contact, id);
  const updateContact = await Contact.findByIdAndUpdate(
    id,
    { $set: { phone, email, name } },
    { returnDocument: "after" }
  );
  return updateContact;
};
const deleteContactById = async (id) => {
  await checkContactByID(Contact, id);
  await Contact.findByIdAndDelete(id);
};

const updateStatusContact = async (id, { favorite }) => {
  await checkContactByID(Contact, id);
  const updateContact = await Contact.findByIdAndUpdate(
    id,
    { $set: { favorite } },
    { returnDocument: "after" }
  );
  return updateContact;
};

module.exports = {
  getContacts,
  getContactById,
  addContact,
  changeContactById,
  deleteContactById,
  updateStatusContact,
};

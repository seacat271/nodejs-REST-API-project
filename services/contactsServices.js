const { Contact } = require("../db/contactModel");
const { checkContact } = require("../helpers/checkContact");


const getContacts = async (owner, {page, limit, favorite}) => {
    const skip = (page - 1)*limit;
    const contacts = await Contact.find({ owner }).select({__v: 0}).skip(skip).limit(parseInt(limit));
    if (favorite) return contacts.filter(contact => contact.favorite.toString() === favorite);
    return contacts;
};

const getContactById = async (id, owner) => {
    const contactByID = await checkContact(id, owner);
  return contactByID;
};

const addContact = async ({ phone, email, name, favorite, owner }) => {
  const newContact = new Contact({ phone, email, name, favorite, owner });
  await newContact.save();
  return newContact;
};

const changeContactById = async (id, { phone, email, name}, owner ) => {
  await checkContact(id, owner)
  const updateContact = await Contact.findByIdAndUpdate(
    id,
    { $set: { phone, email, name } },
    { returnDocument: "after" }
  ).select({__v: 0});
  return updateContact;
};
const deleteContactById = async (id, owner) => {
  await checkContact(id, owner)
  await Contact.findByIdAndDelete(id);
};

const updateStatusContact = async (id, { favorite }, owner) => {
  await checkContact(id, owner)
  const updateContact = await Contact.findByIdAndUpdate(
    id,
    { $set: { favorite } },
    { returnDocument: "after" }
  ).select({__v: 0});
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

const fs =  require("fs").promises;
const contacts = require('./contacts.json')

const listContacts = async () => {
    return contacts
}

const getContactById = async (contactId) => {
  const [contact] = contacts.filter(item => item.id === contactId)
  return contact
}

const removeContact = async (contactId) => {
  const contacts = [...contacts.filter(item => item.id !== (contactId + ""))];
  return contactId
}

const addContact = async (name, phone, email) => {
  console.log(name, phone, email)
  const id = +contacts[contacts.length - 1].id + 1 + "";
  // const id = Date.now();
  console.log(id);
  // contacts = [...contacts, {id, name, email, phone }]
  contacts.push({id, name, email, phone })
  return id
}

const updateContact = async (contactId, body) => {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}

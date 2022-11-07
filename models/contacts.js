const fs =  require("fs").promises;
let contacts = require('./contacts.json')

const listContacts = async () => {
    return contacts
}

const getContactById = async (contactId) => {
  const [contact] = contacts.filter(item => item.id === contactId)
  return contact
}

const removeContact = async (contactId) => {
  contacts = [...contacts.filter(item => item.id !== contactId)];
  return contactId
}

const addContact = async (body) => {
 const {name, phone, email} = body;
  const id = +contacts[contacts.length - 1].id + 1 + "";
  contacts = [...contacts, {id, name, email, phone }]
  // contacts.push({id, name, email, phone })
  return id
}

const updateContact = async (contactId, body) => {
  const {name, phone, email} = body;
  contacts.forEach(contact => {
    if(contact.id === contactId) {
      contact.name = name;
      contact.phone = phone;
      contact.email = email;
    }
  })
  return contactId
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}

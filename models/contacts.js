// const fs =  require("fs").promises;

// const path = require("path");
// const contactsPath = path.join(__dirname, "./contacts.json");

// const dataGet = async path => {
//   return JSON.parse(await fs.readFile(path, "utf-8"))
// };
// const dataChange = async (path, newData) => {
//   return await fs.writeFile(path, JSON.stringify(newData), "utf-8")
// }

// const listContacts = async () => {
//   const contacts = await dataGet(contactsPath);
//   return contacts
// }

// const getById = async (contactId) => {
//   const contacts = await dataGet(contactsPath);

//   const [contact] = contacts.filter(item => item.id === contactId)
//   return contact
// }

// const addContact = async (body) => {
//  const {name, phone, email} = body;
//  const contacts = await dataGet(contactsPath);
//  let newId = +contacts[contacts.length - 1].id + 1 + "";
//   function checkId () {
//     contacts.forEach(({id}) => {
//     if (newId === id) {
//       newId++;
//       checkId();
//     };
//   })
// }
//   checkId();
//   const newData = [...contacts, {id: `${newId}`, name, email, phone }]
//   dataChange(contactsPath, newData)
//   return {id: `${newId}`, name, email, phone }
// }

// const removeContact = async (contactId) => {
//   const contacts = await dataGet(contactsPath);
//   for (const contact of contacts) {
//     if (contact.id === contactId) {
//       const newData = [...contacts.filter(item => item.id !== contactId)];
//       dataChange(contactsPath, newData)
//       return {"message": "contact deleted"}
//     } 
//   }
  
// }

// const updateContact = async (contactId, body) => {
//   const {name: newName, phone: newPhone, email: newEmail} = body;
//   const contacts = await dataGet(contactsPath);
//   for (const contact of contacts) {
//     if (contact.id === contactId) {
//       const updateContact = {
//         id: contact.id,
//         name: newName,
//         phone: newPhone,
//         email: newEmail,
//       };
//   const newData = [...contacts.filter(item => item.id !== contactId), updateContact];
//       dataChange(contactsPath, newData)
//       return updateContact
//     } 
//   }
  
// }

// module.exports = {
//   listContacts,
//   getById,
//   removeContact,
//   addContact,
//   updateContact,
// }

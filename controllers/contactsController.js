const {listContacts,
    getById,
    removeContact,
    addContact,
    updateContact} = require('../models/contacts');
    
    const getContacts = async (req, res) => {
    const contacts = await listContacts()
      res.json(contacts)
    }

    const getContactById = async (req, res) => {
        const {contactId} = req.params;
        const contactByID = await getById(contactId)
        contactByID ? res.json(contactByID) : res.status(404).json({"message": "Not found"}) 
      }

    const postContact = async (req, res) => {
        const newContact = await addContact(req.body);
        res.status(201).json(newContact)
    }

    const deleteContact = async (req, res) => {
        const message = await removeContact(req.params.contactId);
        message ? res.json(message) : res.status(404).json({"message": "Not found"})
      }
    
    const putContact = async (req, res) => {

        const {contactId} = req.params;
        const updateData = await updateContact(contactId, req.body)
        updateData ? res.json(updateData) : res.status(404).json({"message": "Not found"})
      }

    module.exports = {
        getContacts,
        getContactById,
        postContact,
        deleteContact,
        putContact,
      
       
      }
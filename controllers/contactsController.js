const {listContacts,
    getById,
    removeContact,
    addContact,
    updateContact} = require('../models/contacts');

const {Contact} = require('../db/postModel')
    
    const getContacts = async (req, res) => {
    const contacts = await Contact.find({})
      res.json(contacts)
    }

    const getContactById = async (req, res) => {
        const {contactId} = req.params;
        const contactByID = await Contact.findById(contactId)
        contactByID ? res.json(contactByID) : res.status(404).json({"message": "Not found"}) 
      }

    const postContact = async (req, res) => {
const {phone, email, name} = req.body;
const newContact = new Contact({phone, email, name});
await newContact.save()

        // const newContact = await addContact(req.body);
        res.status(201).json(newContact)
    }

    const deleteContact = async (req, res) => {
        const {contactId} = req.params;
        const contactByID = await Contact.findById(contactId)
        await Contact.findByIdAndDelete(contactId)
        contactByID ? res.json({"message": "contact deleted"}) : res.status(404).json({"message": "Not found"})
      }
    
    const putContact = async (req, res) => {
        const {phone, email, name} = req.body;
        const {contactId} = req.params;
        const contactByID = await Contact.findById(contactId);
        await Contact.findByIdAndUpdate(contactId, {$set: {phone, email, name}});
        const updateContact = await Contact.findById(contactId)
        contactByID ? res.json(updateContact) : res.status(404).json({"message": "Not found"})
      }

    module.exports = {
        getContacts,
        getContactById,
        postContact,
        deleteContact,
        putContact,
      
       
      }
const {Contact} = require('../db/postModel');

const getContacts = async () => {
    const contacts = await Contact.find({})
    return contacts
};

const getContactById = async (id) => {
    const contactByID = await Contact.findById(id)
    if(!contactByID) {
        return res.status(404).json({"message": "Not found"}) 
    }
    return contactByID;
};

const addContact = async ({phone, email, name}) => {
    const newContact = new Contact({phone, email, name});
    await newContact.save();
    return newContact;
};

const changeContactById = async (id, { phone, email, name }) => {
    const contactByID = await Contact.findById(id);
    if(!contactByID) {
        return res.status(404).json({"message": "Not found"}) 
    }
    await Contact.findByIdAndUpdate(id, { $set: { phone, email, name } });
    const updateContact = await Contact.findById(id);
    return updateContact;
};
const deleteContactById = async (id) => {
    const contactByID = await Contact.findById(id);
    console.log(contactByID)
    // if(!contactByID) {
    //     return res.status(404).json({"message": "Not found"}) 
    // }
    await Contact.findByIdAndDelete(id);
};

module.exports = {
    getContacts,
    getContactById,
    addContact,
    changeContactById,
    deleteContactById,
}
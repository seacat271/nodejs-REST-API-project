const {Contact} = require('../db/postModel');
const mongoose = require('mongoose');
const { noIdError, noValidIdError } = require('../helpers/errors');

const getContacts = async () => {
    const contacts = await Contact.find({})
    return contacts
};

const getContactById = async (id) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new noValidIdError("Not valid ID")
    };
    const contactByID = await Contact.findById(id)
    if(!contactByID) {
        throw new noIdError("Not found")
    }
    return contactByID;
};

const addContact = async ({phone, email, name, favorite}) => {
    const newContact = new Contact({phone, email, name, favorite});
    await newContact.save();
    return newContact;
};

const changeContactById = async (id, { phone, email, name }) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new noValidIdError("Not valid ID")
    };
    const contactByID = await Contact.findById(id);
    if(!contactByID) {
        throw new noIdError("Not found")
    }
    const updateContact = await Contact.findByIdAndUpdate(id, { $set: { phone, email, name } }, {returnDocument: 'after'});
    return updateContact;
};
const deleteContactById = async (id) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new noValidIdError("Not valid ID")
    };
    const contactByID = await Contact.findById(id);
    if(!contactByID) {
        throw new noIdError("Not found")
    }
    await Contact.findByIdAndDelete(id);
};

const updateStatusContact = async (id, {favorite}) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new noValidIdError("Not valid ID")
    };
    const contactByID = await Contact.findById(id);
    if(!contactByID) {
        throw new noIdError("Not found")
    }
    const updateContact = await Contact.findByIdAndUpdate(id, {$set: {favorite}}, {returnDocument: 'after'});
    return updateContact;
}

module.exports = {
    getContacts,
    getContactById,
    addContact,
    changeContactById,
    deleteContactById,
    updateStatusContact,
}
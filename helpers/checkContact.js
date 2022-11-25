const mongoose = require('mongoose');
const { Contact } = require('../db/contactModel');
const {NoValidIdError } = require('./errors');

const checkContact = async(id, owner) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new NoValidIdError("Not valid ID")
    };
    const contactByID = await Contact.findById(id).select({__v: 0})
    if(!contactByID) {
        throw new NoValidIdError("Not found")
    }
    console.log(contactByID)
    if (contactByID.owner.toString() !== owner) {
        throw new NoValidIdError("Not valid ID")
      }
    return contactByID
}

module.exports ={
    checkContact,
}
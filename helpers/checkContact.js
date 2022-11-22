const mongoose = require('mongoose');
const { User } = require('../db/userModel');
const {NoValidIdError } = require('./errors');

const checkContact = async(id, owner) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new NoValidIdError("Not valid ID")
    };
    const contactByID = await User.findById(id)
    if(!contactByID) {
        throw new NoValidIdError("Not found")
    }
    if (contactByID.owner !== owner) {
        throw new NoValidIdError("Not valid ID")
      }
    return contactByID
}

module.exports ={
    checkContact,
}
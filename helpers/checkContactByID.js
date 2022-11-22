const mongoose = require('mongoose');
const {NoValidIdError } = require('./errors');

const checkContactByID = async(database, id) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new NoValidIdError("Not valid ID")
    };
    const contactByID = await database.findById(id)
    if(!contactByID) {
        throw new NoValidIdError("Not found")
    }
}

module.exports ={
    checkContactByID
}
const mongoose = require('mongoose');
const { noIdError, noValidIdError } = require('../helpers/errors');

const checkByID = async(database, id) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new noValidIdError("Not valid ID")
    };
    const contactByID = await database.findById(id)
    if(!contactByID) {
        throw new noIdError("Not found")
    }
}

module.exports ={
    checkByID
}
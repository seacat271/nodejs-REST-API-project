const {User} = require('../db/usersModel');
const {NotAuthorizedError} = require('../helpers/errors');
const bcrypt = require('bcrypt');
// const { checkByID } = require('../helpers/checkByID');

const register = async (email, password) => {
    const user = new User({email, password: bcrypt.hash(password, 10)});
    await user.save();
    return user;
};

const login = async (id) => {

};

const logout = async ({phone, email, name, favorite}) => {

};


module.exports = {
    register,
    login,
    logout,
}
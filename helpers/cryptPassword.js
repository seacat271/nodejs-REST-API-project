const { NotAuthorizedError } = require("./errors");
const bcrypt = require("bcrypt");

const modifyPassword = async (password) => {
    return await bcrypt.hash(password, 10) 
}

const checkPassword = async (loginPass, truePass) => {
    if (await bcrypt.compare(loginPass, truePass)) return
    else throw new NotAuthorizedError("Email or password is wrong");
}

module.exports = {
    modifyPassword,
    checkPassword,
}
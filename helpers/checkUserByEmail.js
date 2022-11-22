const { User } = require("../db/userModel");
const { NotAuthorizedError, ConflictEmailError } = require("./errors");

const findCheckUserByEmail = async (email, errorMessage) => {
const user = await User.findOne({email})
switch (errorMessage) {
    case "Email in use": 
        if (user) throw new ConflictEmailError(errorMessage)
        break;
    case "Email or password is wrong":
        if (!user) throw new NotAuthorizedError(errorMessage)
        return user
    default:
        return;
}
      }
module.exports ={
    findCheckUserByEmail
}
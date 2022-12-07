const { User } = require("../db/userModel");
const { NotAuthorizedError, ConflictEmailError, ValidationError } = require("./errors");

const findCheckUserByEmail = async (email, errorMessage) => {
const user = await User.findOne({email})
switch (errorMessage) {
    case "Email in use": 
        if (user) throw new ConflictEmailError(errorMessage)
        break;
    case "Email or password is wrong":
        if (!user) throw new NotAuthorizedError(errorMessage)
        return user
    case "Verification has already been passed":
        if (!user) throw new NotAuthorizedError("Email is wrong")
        if(user.verify) throw new ValidationError(errorMessage)
        return user
    default:
        return user;
}
      }
module.exports ={
    findCheckUserByEmail
}
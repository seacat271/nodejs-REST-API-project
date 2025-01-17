const { User } = require("../db/userModel");
const { NotAuthorizedError } = require('../helpers/errors');
const { tokenVerify } = require('../helpers/tokenHelper');


const authMiddleware = async (req, res, next) => {
    try {
        const [tokenType, token] = req.headers.authorization.split(" ");
        const user = tokenVerify(token);
        if(!user) {
            next(new NotAuthorizedError("Not authorized"))
        }
        if(tokenType !== "Bearer") {
            next(new NotAuthorizedError("Not authorized"))
        }
        const userById = await User.findById(user._id)
        if (!userById) {
            next(new NotAuthorizedError("Not authorized"))
        }
        if (userById.token !==  token) {
            next(new NotAuthorizedError("Not authorized"))
        }
        req.user = user;

    } catch (error) {
        next(new NotAuthorizedError("Not authorized"))
    }
    next()
}
module.exports = {
    authMiddleware,
}
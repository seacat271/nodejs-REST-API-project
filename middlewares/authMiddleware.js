var jwt = require('jsonwebtoken');
const { User } = require("../db/userModel");
const { NotAuthorizedError } = require('../helpers/errors');


const authMiddleware = async (req, res, next) => {
    try {
        const [tokenType, token] = req.headers["authorization"].split(" ");
   
        const user = jwt.verify(token, process.env.JWT_SECRET);
        if(!user) {
            next(new NotAuthorizedError("Not authorized INVALID"))
        }
        user.token = token;
        const userById = await User.findById(user._id)
        if (!userById) {
            next(new NotAuthorizedError("Not authorized NOUSER"))
        }
        if (userById.token !==  token) {
            next(new NotAuthorizedError("Not authorized TOKEN"))
        }
        req.user = user;
    } catch (error) {
        next(new NotAuthorizedError("Not authorized ALL"))
    }
next()
}
module.exports = {
    authMiddleware,
}
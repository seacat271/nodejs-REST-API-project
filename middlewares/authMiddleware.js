var jwt = require('jsonwebtoken');
const { NotAuthorizedError } = require('../helpers/errors');


const authMiddleware = async (req, res, next) => {
    try {
const [tokenType, token] = req.headers["authorization"].split(" ");

        const user = jwt.decode(token, process.env.JWT_SECRET);
        if(!user) {
            next(new NotAuthorizedError("Not authorized"))
        }
        req.user = user;
        req.token = token;
    } catch (error) {
        next(new NotAuthorizedError("Not authorized"))
    }
next()
}
module.exports = {
    authMiddleware,
}
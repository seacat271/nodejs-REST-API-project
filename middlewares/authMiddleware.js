var jwt = require('jsonwebtoken');
const { NotAuthorizedError } = require('../helpers/errors');
const authMiddleware = async (req, res, next) => {
const [tokenType, token] = req.headers["authorization"];
if(!token) {
    next(new NotAuthorizedError("Not authorized"))
}
}
module.exports = {
    authMiddleware,
}
const jwt = require('jsonwebtoken');

const tokenCreate = data => {
    return jwt.sign(data, process.env.JWT_SECRET);
}

const tokenVerify = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    tokenVerify,
    tokenCreate,
}
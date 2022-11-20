class ValidationError extends Error {
    constructor (message) {
        super (message);
        this.status = 400;
    }
}

class NoValidIdError extends Error {
    constructor (message) {
        super (message);
        this.status = 404;
    }
}

class NotAuthorizedError extends Error {
    constructor (message) {
        super (message);
        this.status = 401;
    }
}

module.exports = {
    ValidationError,
    NoValidIdError,
    NotAuthorizedError
}
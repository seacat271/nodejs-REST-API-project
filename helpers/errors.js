class CustomError extends Error {
    constructor (message) {
        super (message);
    }
}

class ValidationError extends CustomError {
    constructor (message) {
        super (message);
        this.status = 400;
    }
}

class NoValidIdError extends CustomError {
    constructor (message) {
        super (message);
        this.status = 404;
    }
}

class NotAuthorizedError extends CustomError {
    constructor (message) {
        super (message);
        this.status = 401;
    }
}

module.exports = {
    CustomError,
    ValidationError,
    NoValidIdError,
    NotAuthorizedError
}
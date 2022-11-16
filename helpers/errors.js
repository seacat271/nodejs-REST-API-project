class ValidationError extends Error {
    constructor (message) {
        super (message);
        this.status = 400;
    }
}

class noIdError extends Error {
    constructor (message) {
        super (message);
        this.status = 404;
    }
}
class noValidIdError extends noIdError {
    constructor (message) {
        super (message);
    }
}

module.exports = {
    ValidationError,
    noIdError,
    noValidIdError
}
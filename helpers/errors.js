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
class noValidIdError extends Error {
    constructor (message) {
        super (message);
        this.status = 404;
    }
}

module.exports = {
    ValidationError,
    noIdError,
    noValidIdError
}
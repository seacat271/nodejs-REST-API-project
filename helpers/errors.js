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

const errorHandler =  (err, req, res, next) => {
    res.status(500).json({ message: err.message })
  }
const errorRoute = (req, res) => {
    res.status(404).json({ message: 'Not found' })
  }


module.exports = {
    ValidationError,
    noIdError,
    errorHandler,
    errorRoute
}
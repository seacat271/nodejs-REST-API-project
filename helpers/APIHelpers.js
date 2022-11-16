const { ValidationError, noIdError, noValidIdError } = require('../helpers/errors');


const errorHandler =  (error, req, res, next) => {
    if(error instanceof ValidationError || 
      error instanceof noIdError || 
      error instanceof noValidIdError) {
        return res.status(error.status).json({message: error.message})
    }
   console.log(error)
    res.status(500).json({ message: error.message })
  }
  
const errorRoute = (req, res) => {
    return res.status(400).json({ message: 'Not found' })
  }

  module.exports = {
    errorHandler,
    errorRoute
}
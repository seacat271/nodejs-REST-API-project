const Joi = require('joi');
const { ValidationError } = require('../helpers/errors');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.string().required(),
  });

const contactValidation = (req, res, next) => {
    const validationResult = schema.validate(req.body);
    if(validationResult.error) {
        const [error] = validationResult.error.details
        next(new ValidationError(error.message))
     
  }
  next();
}

module.exports = {
    contactValidation,
  
  }
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
        next(new ValidationError(validationResult.error.details))
     
  }
  next();
}

module.exports = {
    contactValidation,
  
  }
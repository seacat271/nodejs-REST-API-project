const Joi = require('joi');
const { ValidationError } = require('../helpers/errors');

const schemaContact = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.string().required(),
    favorite: Joi.boolean().optional()
  });

const schemaStatus = Joi.object({
    favorite: Joi.boolean().required()
  });

const schemaRegister = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.string().required(),
    favorite: Joi.boolean().optional()
});


const contactValidation = (req, res, next) => {
    const validationResult = schemaContact.validate(req.body);
    if(validationResult.error) {
        const [error] = validationResult.error.details
        next(new ValidationError(error.message))
  }
  next();
}

const patchStatusValidation = (req, res, next) => {
    const validationResult = schemaStatus.validate(req.body);
    if (validationResult.error) {
        next(new ValidationError("missing field favorite"))
    }
    next();
}

const registerValidation = (req, res, next) => {
  const validationResult = schemaRegister.validate(req.body);
  if(validationResult.error) {
    const [error] = validationResult.error.details
    next(new ValidationError(error.message))
}
  next();
}


module.exports = {
    contactValidation,
    patchStatusValidation,
    registerValidation,
  
  }
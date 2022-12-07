const Joi = require('joi');
const { ValidationError } = require('../helpers/errors');

const schemaContact = Joi.object({
    name: Joi.string().trim(true).required(),
    email: Joi.string().trim(true).required().email(),
    phone: Joi.string().trim(true).required(),
    favorite: Joi.boolean().optional()
  });

const schemaStatus = Joi.object({
    favorite: Joi.boolean().required()
  });

const schemaRegister = Joi.object({
    password: Joi.string().trim(true).min(4).max(10).required(),
    email: Joi.string().trim(true).email().required(),
});

const schemaSubscription = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required()
});
 const schemaResendingVerification = Joi.object({
    email: Joi.string().trim(true).email().required(),
 })

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

const subscriptionValidation = (req, res, next) => {
  const validationResult = schemaSubscription.validate(req.body);
  if(validationResult.error) {
    const [error] = validationResult.error.details
    next(new ValidationError(error.message))
}
  next();
}

const authValidation = (req, res, next) => {
  const validationResult = schemaRegister.validate(req.body);
  if(validationResult.error) {
    const [error] = validationResult.error.details
    next(new ValidationError(error.message))
}
  next();
}

const resendingValidation = (req, res, next) => {
  const validationResult = schemaResendingVerification.validate(req.body);
  if (validationResult.error) {
    next(new ValidationError("missing required field email"))
  }
  next();
}

module.exports = {
    contactValidation,
    patchStatusValidation,
    authValidation,
    subscriptionValidation,
    resendingValidation,
  }
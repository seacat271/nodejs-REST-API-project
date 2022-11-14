const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.string().required(),
  });

const addContactValidation = (req, res, next) => {
    const validationResult = schema.validate(req.body);
    if(validationResult.error) {
        return res.status(400).json({"message": "missing required name field",})
     
  }
  next();
}

// const putContactValidation = (req, res, next) => {
//     const validationResult = schema.validate(req.body);
//     if(validationResult.error) {
//         return res.status(400).json({"message": "missing fields"})
//     }
//     next();
// }

module.exports = {
    addContactValidation,
    putContactValidation,
  }
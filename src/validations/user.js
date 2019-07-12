const Joi = require('@hapi/joi');

// Validate register
const registerValidation = (data) => {
  const schema = {
    name: Joi.string().required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  };

  return Joi.validate(data, schema);
};

// Validate login
const loginValidation = (data) => {
  const schema = {
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  };

  return Joi.validate(data, schema);
};

module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;

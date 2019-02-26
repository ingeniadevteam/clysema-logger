"use strict";

const joi = require('joi');

// the validation schema for state.config.env
const loggerVarsSchema = joi.object({
  // logger level
  level: joi.string()
  .valid(['error', 'warn', 'info', 'debug'])
  .default('info'),
}).unknown();


module.exports = async function (obj) {

  if (!obj) {
    obj = {};
  }

  const validation = joi.validate(obj, loggerVarsSchema);
  if (validation.error) {
    const errors = [];
    validation.error.details.forEach( detail => {
      errors.push(detail.message);
    });
    // validation failed
    throw new Error(`logger validation error: ${errors.join(", ")}`);
  }

  return validation.value;
};

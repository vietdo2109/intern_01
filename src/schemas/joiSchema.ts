import * as Joi from 'joi';

export const SignUpJoiSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    'string.empty': "Username can't be empty!!",
  }),
  email: Joi.string().required().messages({
    'string.empty': "Email can't be empty!!",
  }),
  password: Joi.string()
    .min(8) // Minimum length 8 characters
    .pattern(new RegExp('(?=.*[a-z])')) // At least one lowercase letter
    .pattern(new RegExp('(?=.*[A-Z])')) // At least one uppercase letter
    .pattern(new RegExp('(?=.*[0-9])')) // At least one number
    .pattern(new RegExp('(?=.*[^a-zA-Z0-9])')) // At least one special character
    .required()
    .messages({
      'string.min': 'Password must be at least 8 characters long.',
      'string.pattern.base':
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
      'string.empty': "Password can't be empty!!",
    }),
  repeat_password: Joi.valid(Joi.ref('password')).required().messages({
    'any.only': 'Passwords must match',
  }),

  age: Joi.number().min(0),
  dob: Joi.date(),

  social: Joi.object({
    facebook: Joi.string().alphanum().min(3).max(30).required().messages({
      'string.base': 'facebook must be a string',
      'string.alphanum': 'facebook must only contain alphanumeric characters',
      'string.min': 'facebook must be at least 3 characters long',
      'string.max': 'facebook must be at most 30 characters long',
      'any.required': 'Facebook is required!!',
      'string.empty': "Facebook can't be empty!!",
    }),
    linkedIn: Joi.string().alphanum().min(3).max(30).required().messages({
      'string.base': 'LinkedIn must be a string',
      'string.alphanum': 'LinkedIn must only contain alphanumeric characters',
      'string.min': 'LinkedIn must be at least 3 characters long',
      'string.max': 'LinkedIn must be at most 30 characters long',
      'any.required': 'LinkedIn is required!!',
      'string.empty': "LinkedIn can't be empty!!",
    }),
  }),
  phNums: Joi.array().items(
    Joi.object({
      pNumber: Joi.string()
        .pattern(/^[0-9]{10,15}$/)
        .required()
        .messages({
          'string.base': 'phNums must be a string',
          'string.pattern.base': 'phNums must be between 10 and 15 digits and contain only numbers',
          'any.required': 'phNums is required',
          'string.empty': 'phNums is required',
        }),
    }),
  ),
  phoneNums: Joi.array().items(
    Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .required()
      .messages({
        'string.base': 'Phone number must be a string',
        'string.pattern.base':
          'Phone number must be between 10 and 15 digits and contain only numbers',
        'any.required': 'Phone number is required',
        'string.empty': 'Phone number is required',
      }),
  ),
}).with('password', 'repeat_password');

const { body, validationResult } = require('express-validator');

// User Validation Rules
const userValidation = () => [
  body('username')
    .isLength({ min: 5 })
    .withMessage('Username must be at least 5 characters long'),
  body('email')
    .isEmail()
    .withMessage('Email is not valid'),
  body('password')
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol'),
];

// Validation Handler
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  userValidation: userValidation,
  validate: validate
};

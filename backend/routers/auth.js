const express = require('express');
const { signup, login } = require('../controllers/authController');
const { signupValidation, loginValidation } = require('../middleware/authValidation');
const router = express.Router();

console.log({ signupValidation, loginValidation });

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

module.exports = router;

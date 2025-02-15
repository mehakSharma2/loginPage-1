const Joi = require('joi');

const signupValidation = (req, res, next) => {
  console.log("Request body:", req.body);  // Debugging line
  
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    console.log("Validation error:", error.details[0].message);  // Debugging line
    return res.status(400).json({ message: "Bad request", error: error.details[0].message });
  }

  next();
};

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(4).max(100).required(),
    });
  
    const { error } = schema.validate(req.body);
    if (error) {
      console.log("Validation error:", error.details[0].message);  // Debugging line
      return res.status(400).json({ message: "Bad request", error: error.details[0].message });
    }
  
    next();
  };
  

module.exports = {
    signupValidation,
    loginValidation
}
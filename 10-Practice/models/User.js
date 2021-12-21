const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Please add a name'],
    minlength: [3,'Name must be at least 3 characters'],
    maxlength: [50,'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true,'Please add an email'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email'
      }
    },
  password: {
    type: String,
    required: [true,'Please add a password'],
    minlength: [6,'Password must be at least 6 characters'],
  },
  role: {
    type: String,
    enum: ['user','admin'],
    default: 'user'
  },
});

module.exports = mongoose.model('User', UserSchema);
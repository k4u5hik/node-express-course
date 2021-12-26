const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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

UserSchema.pre('save', async function(){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function(candidatePassword){
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
}

module.exports = mongoose.model('User', UserSchema);

// Line 16 - email validation
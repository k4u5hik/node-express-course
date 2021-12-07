const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'Company is required'],
      maxlength: [50, 'Company name must be less than 50 characters'],
  },
  position: {
    type: String,
    required: [true, 'Position is required'],
      maxlength: [50, 'Position name must be less than 50 characters'],
  },
  status: {
    type: String,
    enum: ['Interview', 'Declined', 'Pending'],
    default: 'Pending',
  },
  createdBy:{
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);
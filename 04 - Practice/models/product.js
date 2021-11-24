const mongoose = require('mongoose');

//Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Product name is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true,'Product price is required'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not a company we have',
    },
    //enum: ['ikea', 'liddy', 'caressa', 'marcos'],
  },
});
module.exports = mongoose.model('Product', productSchema);
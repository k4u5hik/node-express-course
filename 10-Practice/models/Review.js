const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: 1,
    max: 5
  },
  title : {
    type: String,
    required: [true, 'Title is required'],
    minlength: [3, 'Title must be at least 3 characters long'],
    maxlength: [100, 'Title must be less than 50 characters long']
  },
  comment: {
    type: String,
    required: true
  },
  // attach the user id to the review
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  // attach the product id to the review
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: true
  }
},
    {timestamps: true}
)
// user can only create one review per product
ReviewSchema.index({product: 1, user: 1}, {unique: true});

module.exports = mongoose.model('Review', ReviewSchema);
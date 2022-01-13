const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true, // removes white space
        maxlength: [50, 'Name can not be more than 50 characters'],
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
        trim: true,
        default: 0,
        min: [0, 'Price must be greater than 0'],
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        trim: true,
        maxlength: [500, 'Description can not be more than 500 characters'],
    },
    image: {
        type: String,
        default: '/uploads/example.jpeg',
        required: [false, 'Please add an image'],
        trim: true,
    },
    category: {
        type: String,
        required: [true, 'Please add a category'],
        trim: true,
        enum: ['Office', 'Kitchen', 'Bedroom', 'Other'],
    },
    company: {
        type: String,
        required: [true, 'Please add a company'],
        trim: true,
        enum: {
            values: ['Samsung', 'Apple', 'LG', 'Other'],
            message: '{VALUE} is not supported'
        },
    },
    colours: {
        type: [String],
        required: [true, 'Please add at least one colour'],
        default: ['Black'],
        enum: {
            values: ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Other'],
            message: '{VALUE} is not supported'
        },
    },
    featured: {
        type: Boolean,
        default: false,
    },
    freeShipping: {
        type: Boolean,
        default: false,
    },
    inventory: {
      type: Number,
      required: true,
      default: 15,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
},
    {timestamps: true}
);

module.exports = mongoose.model('Product', ProductSchema);
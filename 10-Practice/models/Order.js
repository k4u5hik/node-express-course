const mongoose = require('mongoose');

const SingleCartItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

const OrderSchema = new mongoose.Schema({
        tax: {
            type: Number,
            required: true,
        },
        shippingFeet: {
            type: Number,
            required: true,
        },
        subtotal: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        cartItems: [SingleCartItemSchema],
        status: {
            type: String,
            enum: ['pending', 'shipped', 'delivered', 'failed', 'cancelled'],
            default: 'pending',
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        clientSecret: {
            type: String,
            required: true,
        },
        paymentIntentId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    });

module.exports = mongoose.model('Order', OrderSchema);
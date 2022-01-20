const Order = require('../models/Order');
const Product = require('../models/Product');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const {checkPermissions} = require('../utils');

const fakeStripeAPI = async ({amount, currency}) => {
    const client_secret = 'someRandomValue'
    return {client_secret, amount}
}

const createOrder = async (req,res) => {
    const {items: cartItems, tax, shippingFee} = req.body;

    if (!cartItems || cartItems.length < 1) {
        throw new CustomError.BadRequestError('Cart is empty');
    }
    if (!tax || !shippingFee) {
        throw new CustomError.BadRequestError('Tax or shipping fee is missing');
    }

    let orderItems = [];
    let subtotal = 0;

    for (const item of cartItems) {
        const dbProduct = await Product.findOne({_id:item.product});
        if (!dbProduct) {
            throw new CustomError.NotFoundError(`Product not found with id ${item.product}`);
        }
        const {name, price, image, _id} = dbProduct;
        //console.log(name, price, image, _id);
        const singleOrderItem = {
            amount: item.amount,
            name, price, image, product: _id,
        };
        //add item to order
        orderItems = [...orderItems, singleOrderItem];
        //add item to subtotal, we don't overwrite subtotal, += is used
        subtotal += item.amount * price;
    }
    //calculate total
    const total = subtotal + tax + shippingFee;
    // get client secret
    const paymentIntent = await fakeStripeAPI({
        amount: total,
        currency: 'usd',
    });

    const order = await Order.create({
        orderItems,
        total,
        subtotal,
        tax,
        shippingFee,
        clientSecret: paymentIntent.client_secret,
        user: req.user.userId,
    });

    res.status(StatusCodes.CREATED).json({
        order,
        client_secret: order.client_secret
    });
}

const getAllOrders = async (req,res) => {
    res.send('get all orders');
}

const getSingleOrder = async (req,res) => {
    res.send('get single order');
}

const getCurrentUserOrders = async (req,res) => {
    res.send('get current user orders');
}

const updateOrder = async (req,res) => {
    res.send('update order');
}

module.exports = {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder
}
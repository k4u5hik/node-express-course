const Product = require('../models/product');
const {StatusCodes} = require('http-status-codes');

const createProduct = async (req, res) => {
    res.send('create Product');
};

const getAllProducts = async (req, res) => {
    res.send('get all Products');
};


module.exports = {
    createProduct,
    getAllProducts
};
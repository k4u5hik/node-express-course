const Product = require('../models/Product');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');

const createProduct = async (req, res) => {
  req.body.user = req.user.userId
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({product});
};

const getAllProducts = async (req, res) => {
  console.log(req.user);
  const products = await Product.find({})
  res.status(StatusCodes.OK).json({products, count: products.length});
};

const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    throw new CustomError(StatusCodes.NOT_FOUND, 'Product not found');
  }
  res.status(StatusCodes.OK).json({product});
};

const updateProduct = async (req, res) => {
  res.send('updateProduct');
};

const deleteProduct = async (req, res) => {
  res.send('deleteProduct');
};

const uploadImage = async (req, res) => {
  res.send('uploadImage');
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
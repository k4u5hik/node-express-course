const Review = require('../models/Review');
const Product = require('../models/Product');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const {checkPermissions} = require('../utils');

const createReview = async (req, res) => {
    const {product: productId} = req.body;
    const isValidProduct = await Product.findOne({_id:productId});
    if (!isValidProduct) {
        throw new CustomError.NotFoundError(`Product with id ${productId} does not exist`);
    }
    // Each user can only post one review on each product
    const alreadySubmitted = await Review.findOne({
        product: productId,
        user: req.user.userId
    });

    if (alreadySubmitted) {
        throw new CustomError.BadRequestError(`You have already submitted a review for this product`);
    }

    req.body.user = req.user.userId
    const review = await Review.create(req.body);
    res.status(StatusCodes.CREATED).json({review});
}

const getAllReviews = async (req, res) => {
    const reviews = await Review.find({});
    if (!reviews) {
        throw new CustomError.NotFoundError(`Review with id ${reviewId} does not exist`);
    }
    res.status(StatusCodes.OK).json({reviews,count: reviews.length});
}

const getSingleReview = async (req, res) => {
    const {id: reviewId} = req.params;
    const review = await Review.findOne({_id: reviewId});
    if (!review) {
        throw new CustomError.NotFoundError(`Review with id ${reviewId} does not exist`);
    }
    res.status(StatusCodes.OK).json({review});
}

const updateReview = async (req, res) => {
    const {id: reviewId} = req.params;
    const {rating, title, comment} = req.body;
    const review = await Review.findOne({_id: reviewId});
    if (!review) {
        throw new CustomError.NotFoundError(`Review with id ${reviewId} does not exist`);
    }
    checkPermissions(req.user, review.user);
    review.rating = rating;
    review.title = title;
    review.comment = comment;
    await review.save();
    res.status(StatusCodes.OK).json({review});
}

const deleteReview = async (req, res) => {
    const {id: reviewId} = req.params;
    const review = await Review.findOne({_id: reviewId});
    if (!review) {
        throw new CustomError.NotFoundError(`Review with id ${reviewId} does not exist`);
    }
    checkPermissions(req.user, review.user);
    await review.remove();
    res.status(StatusCodes.OK).json({message: 'Review deleted successfully'});
}

module.exports = {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview
}
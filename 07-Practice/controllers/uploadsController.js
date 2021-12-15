const path = require('path');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');

const uploadProductImage = async (req, res) => {
    // if the file exists
    //check format
    //check size
    if (!req.files) {
        throw new CustomError.BadRequestError('No file was uploaded.');
    }
    const productImage = req.files.image;

    if (!productImage.mimetype.startsWith('image')) {
        throw new CustomError.BadRequestError('The uploaded file needs to be an image.');
    }

    const maxSize = 1024 * 1024;
    if (productImage.size > maxSize) {
        throw new CustomError.BadRequestError('The uploaded file is too big.');
    }

    const imagePath = path.join(
        __dirname,
        '../public/uploads/' + `${productImage.name}`);
    await productImage.mv(imagePath);
    return res.status(StatusCodes.OK).json({
        image: { src: `/uploads/${productImage.name}` },
        message: 'Image uploaded successfully',
    });
};

module.exports = {
    uploadProductImage
};
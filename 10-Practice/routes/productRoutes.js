const express = require('express');
const router = express.Router();
const {authenticateUser, authorisePermissions} = require('../middleware/authentication');

const {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadImage,
} = require('../controllers/productController');

router.route('/')
    .get(getAllProducts)
    .post([authenticateUser, authorisePermissions('admin')], createProduct);

router.route('/:id/uploadImage')
    .put(authenticateUser, authorisePermissions, uploadImage);
router.route('/:id')
    .get(getSingleProduct)
    .patch(authenticateUser, authorisePermissions, updateProduct)
    .delete(authenticateUser, authorisePermissions, deleteProduct);


module.exports = router;
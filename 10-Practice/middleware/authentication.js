const CustomErr = require('../errors');
const {isTokenValid} = require('../utils');

const authenticateUser = async (req, res, next) => {
    const token = req.signedCookies.token
    if (!token) {
        console.log('No token found');
    } else {
        console.log('token present')
    }
    next()
};

module.exports = {
    authenticateUser
};
const User = require('../models/user');
const {StatusCodes} = require('http-status-codes');
const {BadRequestError} = require('../errors');
const jwt = require('jsonwebtoken');



const register = async (req, res) => {
    const user = await User.create({...req.body});
    const token = jwt.sign({userId:user._id,name: user.name}, 'jwtSecret', {expiresIn: '1h'});
    res.status(StatusCodes.CREATED).json({user:{name: user.name},token}); // you get the token in the frontend, you can also opt to get back the name and email
}
const login = async (req, res) => {
    res.send('login');
}

module.exports = {
    register,
    login
}
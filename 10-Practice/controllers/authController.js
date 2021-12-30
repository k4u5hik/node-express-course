const User = require('../models/user');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const {attachCookiesToResponse} = require('../utils/jwt');


const register = async (req, res) => {
    const {name, email, password} = req.body;
    const emailExists = await User.findOne({email});
    if (emailExists) {
        throw new CustomError.BadRequestError('Email already exists');
    }
    // first registered user is an admin
    const isFirstAccount = await User.countDocuments({}) === 0;
    const role = isFirstAccount ? 'admin' : 'user'; // if true, then admin, else user

    const user = await User.create({name, email, password, role});
    const tokenUser = {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    };
    attachCookiesToResponse({res, user:tokenUser});
    //res.status(StatusCodes.CREATED).json({user:tokenUser});
}
const login = async (req, res) => {
    res.send('Logged in');
};

const logout = async (req, res) => {
    res.send('Logged out');
};

module.exports = {
    register,
    login,
    logout
}
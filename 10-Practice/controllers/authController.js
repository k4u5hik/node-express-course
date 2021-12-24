const User = require('../models/user');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');

const register = async (req, res) => {
    const {email} = req.body;
    const emailExists = await User.findOne({email});
    if (emailExists) {
        throw new CustomError.BadRequestError('Email already exists');
    }
    const user = await User.create((req.body))
    res
        .status(StatusCodes.CREATED)
        .json({user});
};

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
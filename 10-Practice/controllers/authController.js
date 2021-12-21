const User = require('../models/user');

const register = async (req, res) => {
    res.send('Registered');
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
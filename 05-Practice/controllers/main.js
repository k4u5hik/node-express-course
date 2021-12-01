// check username, password in post (login) request
// if exist create new JWT token
// send back to frontend

// setup authentication so only the request with JWT can access the dashboard route

const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const login = async (req,res) => {
    const {username, password} = req.body;

    //mongoose validation
    //Joi validation
    //check in the controller

    // check if username and password exist
    if (!username || !password) {
        throw new CustomAPIError('Username or password is missing', 400)
    }
    //just for demo, normally provided by the DB
    const id = new Date().getTime()
    // try to keep payload small, better experience for the user
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});

    console.log(username, password);
    res.status(200).json({msg: 'User Created', token});
}

const dashboard = async (req,res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomAPIError('No token provided!', 401);
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        const luckyNumber = Math.floor(Math.random() * 100)
        res.status(200).json({msg:`Hello, ${decoded.username}`, secret:`Here is your authorised data, your lucky number is ${luckyNumber}`})
    } catch (error) {
        throw new CustomAPIError('Invalid token', 401);
    }

}

module.exports = {
    login,
    dashboard
}
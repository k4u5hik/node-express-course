// check username, password in post (login) request
// if exist create new JWT token
// send back to frontend

// setup authentication so only the request with JWT can access the dashboard route

const login = async (req,res) => {
    const { username, password } = req.body;

    const CustomAPIError = require('../errors/custom-error');
    //mongoose validation
    //Joi validation
    //check in the controller

    // check if username and password exist
    if(!username || !password) {
            throw new CustomAPIError('Username or password is missing', 400)
    }

    console.log(username, password);
    res.send('Fake login/Register/Signup Route')
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg:`Hello, John Doe`, secret:`Here is your authorised data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}
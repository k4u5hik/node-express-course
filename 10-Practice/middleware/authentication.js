const CustomErr = require('../errors');
const {isTokenValid} = require('../utils');

const authenticateUser = async (req, res, next) => {
    const token = req.signedCookies.token
    if (!token) {
        throw new CustomErr.UnauthenticatedError('Authentication failed');
    }

    try{
        const {name,_id,role} = isTokenValid({token});
        //console.log(payload);
        req.user = {name, _id, role}
        next()
    }catch (error){
        throw new CustomErr.UnauthenticatedError('Authentication failed');
    }
};

const authorisePermissions = (...rest) => {
    console.log(rest);

};

module.exports = {
    authenticateUser,
    authorisePermissions
};
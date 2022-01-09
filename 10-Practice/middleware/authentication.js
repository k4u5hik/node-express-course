const CustomErr = require('../errors');
const {isTokenValid} = require('../utils');

const authenticateUser = async (req, res, next) => {
    const token = req.signedCookies.token
    if (!token) {
        throw new CustomErr.UnauthenticatedError('Authentication failed');
    }

    try{
        const {name,userId,role} = isTokenValid({token});
        //console.log(payload);
        req.user = {name, userId, role}
        next()
    }catch (error){
        throw new CustomErr.UnauthenticatedError('Authentication failed');
    }
};

const authorisePermissions = (...roles) => {
    //console.log(rest);
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new CustomErr.UnauthorizedError(
                'Unauthorized to access this route/resource'
            );}
        next();
    }
};

module.exports = {
    authenticateUser,
    authorisePermissions
};
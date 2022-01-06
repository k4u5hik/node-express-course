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

const authorisePermissions = (req,res,next) => {
    console.log('admin route');
    if (req.user.role !== 'admin') {
        throw new CustomErr.UnauthorizedError('You are not authorized to perform this action');
    }
    next();
};

module.exports = {
    authenticateUser,
    authorisePermissions
};
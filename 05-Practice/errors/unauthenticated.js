const {statusCodes, StatusCodes}=require('http-status-codes');
const CustomAPIError = require('./custom-error');

class UnauthenticatedError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnauthenticatedError

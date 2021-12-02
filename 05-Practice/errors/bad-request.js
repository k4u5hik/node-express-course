const {statusCodes, StatusCodes}=require('http-status-codes');
const CustomAPIError = require('./custom-error');

class BadRequest extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequest;

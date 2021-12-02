const CustomAPIError = require('./custom-error');

class UnauthenticatedError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = 401
    }
}

module.exports = UnauthenticatedError

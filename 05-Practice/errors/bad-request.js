const CustomAPIError = require('./custom-error');

class BadRequest extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = 400
    }
}

module.exports = BadRequest;

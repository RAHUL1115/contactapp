const BaseError = require("./baseError");

class unauthorizedError extends BaseError {
    constructor(message) {
        super(message);
        this.statusCode = 401;
    }
}

module.exports = unauthorizedError
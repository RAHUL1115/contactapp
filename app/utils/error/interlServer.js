const BaseError = require("./baseError");

class InternalServer extends BaseError {
    constructor(message) {
        super(message);
        this.statusCode = 500;
    }
}

module.exports = InternalServer
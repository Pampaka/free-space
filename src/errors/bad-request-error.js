const { RequestError } = require("./request-error");

class BadRequestError extends RequestError {
	constructor(message, errors = []) {
		super(message, 400);
		this.errors = errors;
	}
}

module.exports = { BadRequestError };

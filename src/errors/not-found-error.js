const { RequestError } = require("./request-error");

class NotFoundError extends RequestError {
	constructor(message) {
		super(message, 404);
	}
}

module.exports = { NotFoundError };

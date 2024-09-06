const { RequestError } = require("./request-error");

class ForbiddenError extends RequestError {
	constructor(message = "Нет доступа") {
		super(message, 403);
	}
}

module.exports = { ForbiddenError };

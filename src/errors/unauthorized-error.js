const { RequestError } = require("./request-error");

class UnauthorizedError extends RequestError {
	constructor(message = "Не авторизован") {
		super(message, 401);
	}
}

module.exports = { UnauthorizedError };

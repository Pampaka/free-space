const { RequestError } = require("../errors/request-error");

function errorHandler(error, _req, res, _next) {
	if (error instanceof RequestError) {
		res.status(error.status).json(error);
	} else {
		res.status(500).json({ message: "Непредвиденная ошибка" });
	}
}

module.exports = { errorHandler };

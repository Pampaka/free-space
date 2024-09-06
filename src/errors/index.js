const { BadRequestError } = require("./bad-request-error");
const { ForbiddenError } = require("./forbidden-error");
const { NotFoundError } = require("./not-found-error");
const { UnauthorizedError } = require("./unauthorized-error");

module.exports = {
	ForbiddenError,
	UnauthorizedError,
	NotFoundError,
	BadRequestError
};

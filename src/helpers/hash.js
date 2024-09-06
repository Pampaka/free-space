const bcrypt = require("bcrypt");

async function hash(value) {
	return bcrypt.hash(value, 10);
}

async function compareHash(value, hash) {
	return bcrypt.compare(value, hash);
}

module.exports = {
	hash,
	compareHash
};

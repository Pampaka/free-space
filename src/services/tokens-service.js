var jwt = require("jsonwebtoken");
const { config } = require("../config");
const { Token } = require("../models");

class TokensService {
	getTokens(payload) {
		return {
			accessToken: jwt.sign(payload, config.jwt.accessSecret, {
				expiresIn: config.jwt.accessExpires / 1000
			}),
			refreshToken: jwt.sign(payload, config.jwt.accessSecret, {
				expiresIn: config.jwt.refreshExpires / 1000
			})
		};
	}

	verifyToken(token) {
		try {
			const tokenPayload = jwt.verify(token, config.jwt.refreshSecret);
			return tokenPayload;
		} catch (e) {
			return null;
		}
	}

	async saveToken(userId, token) {
		const tokenFromDb = await Token.findOne({
			where: { userId }
		});
		if (tokenFromDb) {
			await tokenFromDb.update({ token });
		} else {
			await Token.create({ userId, token });
		}
	}
}

module.exports = new TokensService();

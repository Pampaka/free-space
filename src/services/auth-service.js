const { ForbiddenError, UnauthorizedError } = require("../errors");
const { compareHash } = require("../helpers/hash");
const { User } = require("../models");
const tokensService = require("./tokens-service");

class AuthService {
	async signIn(login, password) {
		const user = await User.findOne({ where: { login } });
		if (!user) {
			throw new UnauthorizedError(
				"Пользователь не найден. Проверьте введенные данные или обратитесь к администратору"
			);
		}
		if (user.isBlocked) {
			throw new ForbiddenError("Пользователь заблокирован. Обратитесь к администратору");
		}

		if (!(await compareHash(password, user.password))) {
			throw new UnauthorizedError("Неверный пароль");
		}

		return this._getTokens(user);
	}

	async refresh(token) {
		const tokenPayload = tokensService.verifyToken(token);
		if (!user) throw new UnauthorizedError();
		if (user.isBlocked) {
			throw new ForbiddenError("Пользователь заблокирован. Обратитесь к администратору");
		}

		const user = await User.findByPk(tokenPayload.id);

		return this._getTokens(user);
	}

	async _getTokens(user) {
		const tokens = tokensService.getTokens({
			id: user.id,
			login: user.login,
			roleId: user.roleId
		});
		await tokensService.saveToken(tokens.refreshToken);
		return tokens;
	}
}

module.exports = new AuthService();

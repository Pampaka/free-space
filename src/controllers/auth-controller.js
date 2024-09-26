const { config } = require("../config");
const authService = require("../services/auth-service");

class AuthController {
	TOKEN_KEY = "free_space_token";
	refreshTokenOptions = {
		httpOnly: true,
		maxAge: config.jwt.refreshExpires,
		secure: true
	};

	async signIn(req, res, next) {
		try {
			const { accessToken, refreshToken } = await authService.signIn(
				req.body.login,
				req.body.password
			);
			res.cookie(this.TOKEN_KEY, refreshToken, this.refreshTokenOptions);
			res.json({ accessToken });
		} catch (e) {
			next(e);
		}
	}

	async refresh(req, res, next) {
		try {
			const { accessToken, refreshToken } = await authService.refresh(
				req.cookie[this.TOKEN_KEY]
			);
			res.cookie(this.TOKEN_KEY, refreshToken, this.refreshTokenOptions);
			res.json({ accessToken });
		} catch (e) {
			next(e);
		}
	}
}

module.exports = new AuthController();

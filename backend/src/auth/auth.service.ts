import { ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Types } from "mongoose";
import { compareHash } from "shared/helpers/hash";
import { TokensService } from "tokens/tokens.service";
import { UserDocument } from "users/user.schema";
import { UsersService } from "users/users.service";

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private tokensService: TokensService
	) {}

	async signIn(login: string, password: string) {
		const user = await this.usersService.findByLogin(login);
		if (!user) {
			throw new UnauthorizedException(
				"Пользователь не найден. Проверьте введенные данные или обратитесь к администратору"
			);
		}
		if (user.isBlocked) {
			throw new ForbiddenException("Пользователь заблокирован. Обратитесь к администратору");
		}

		if (!(await compareHash(password, user.password))) {
			throw new UnauthorizedException("Неверный пароль");
		}

		return this._getTokens(user);
	}

	async refresh(token: string) {
		const tokenPayload = this.tokensService.verifyRefreshToken(token);
		if (!tokenPayload) throw new UnauthorizedException();

		const user = await this.usersService.findById(new Types.ObjectId(tokenPayload.id));
		if (!user) throw new UnauthorizedException();
		if (user.isBlocked) {
			throw new ForbiddenException("Пользователь заблокирован. Обратитесь к администратору");
		}

		return this._getTokens(user);
	}

	private async _getTokens(user: UserDocument) {
		const tokens = await this.tokensService.generateTokens({
			id: user._id.toString(),
			login: user.login,
			isAdmin: user.isAdmin
		});
		await this.tokensService.saveToken(user._id, tokens.refreshToken);

		return tokens;
	}
}

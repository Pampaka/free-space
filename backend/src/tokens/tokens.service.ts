import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { TokenPayload } from "./token.types";
import { Token, TokenDocument, TokenModel } from "./token.schema";
import { configuration } from "config/configuration";
import { AppLogger } from "app-logger/app-logger";
import { Types } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class TokensService {
	constructor(
		private logger: AppLogger,
		@InjectModel(Token.name) private tokenModel: TokenModel,
		private jwtService: JwtService,
		@Inject(configuration.KEY) private config: ConfigType<typeof configuration>
	) {
		this.logger.setContext(TokensService.name);
	}

	async generateTokens(
		payload: TokenPayload
	): Promise<{ accessToken: string; refreshToken: string }> {
		const [accessToken, refreshToken] = await Promise.all([
			this.jwtService.signAsync(payload),
			this.jwtService.signAsync(payload, {
				secret: this.config.jwt.refreshSecret,
				expiresIn: this.config.jwt.refreshExpires
			})
		]);

		return {
			accessToken,
			refreshToken
		};
	}

	async saveToken(user: Types.ObjectId, refreshToken: string): Promise<TokenDocument> {
		try {
			const updatedToken = await this.tokenModel.findOneAndUpdate(
				{ refreshToken },
				{ user },
				{ new: true }
			);
			if (updatedToken) return updatedToken;

			return await this.tokenModel.create({ user, refreshToken });
		} catch (e) {
			this.logger.debug(e?.message, "saveToken");
			throw e;
		}
	}

	verifyAccessToken(token: string): TokenPayload {
		try {
			return this.jwtService.verify(token);
		} catch (e) {
			return null;
		}
	}

	verifyRefreshToken(token: string): TokenPayload {
		try {
			return this.jwtService.verify(token, {
				secret: this.config.jwt.refreshSecret
			});
		} catch (e) {
			return null;
		}
	}

	async remove(refreshToken: string): Promise<void> {
		await this.tokenModel.deleteOne({ refreshToken });
	}

	async findOne(refreshToken: string): Promise<TokenDocument> {
		return this.tokenModel.findOne({ refreshToken }).exec();
	}
}

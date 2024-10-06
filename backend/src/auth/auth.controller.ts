import { Body, Controller, Inject, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/sign-in.dto";
import { CookieOptions, Request, Response } from "express";
import { AppConfigType, configuration } from "config/configuration";

@Controller("auth")
export class AuthController {
	private readonly TOKEN_KEY = "refresh_token_fs";
	private readonly refreshTokenOptions: CookieOptions;

	constructor(
		private authService: AuthService,
		@Inject(configuration.KEY) config: AppConfigType
	) {
		this.refreshTokenOptions = {
			httpOnly: true,
			maxAge: config.jwt.refreshExpires,
			secure: true
		};
	}

	@Post("sign-in")
	async signIn(@Body() signInDto: SignInDto, @Res({ passthrough: true }) res: Response) {
		const { accessToken, refreshToken } = await this.authService.signIn(
			signInDto.login,
			signInDto.password
		);
		res.cookie(this.TOKEN_KEY, refreshToken, this.refreshTokenOptions);
		return { accessToken };
	}

	@Post("refresh")
	async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
		const { accessToken, refreshToken } = await this.authService.refresh(
			req.cookies[this.TOKEN_KEY]
		);
		res.cookie(this.TOKEN_KEY, refreshToken, this.refreshTokenOptions);
		return { accessToken };
	}
}

import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request } from "express";
import { IS_PUBLIC_KEY } from "../decorators/public.decorator";
import { TokensService } from "tokens/tokens.service";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private tokensService: TokensService,
		private reflector: Reflector
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
			context.getHandler(),
			context.getClass()
		]);
		if (isPublic) return true;

		const request: Request = context.switchToHttp().getRequest();

		const token = this.extractTokenFromHeader(request);
		if (!token) {
			throw new UnauthorizedException("Пользователь не авторизован");
		}

		const payload = await this.tokensService.verifyAccessToken(token);

		if (!payload) {
			throw new UnauthorizedException("Пользователь не авторизован");
		}

		request["user"] = payload;

		return true;
	}

	private extractTokenFromHeader(request: Request): string | undefined {
		const [type, token] = request.headers.authorization?.split(" ") ?? [];
		return type === "Bearer" ? token : undefined;
	}
}

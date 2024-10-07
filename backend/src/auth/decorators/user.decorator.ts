import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { TokenPayload } from "tokens/token.types";

export const User = createParamDecorator((_data: unknown, ctx: ExecutionContext): TokenPayload => {
	const request = ctx.switchToHttp().getRequest();
	return request.user as TokenPayload;
});

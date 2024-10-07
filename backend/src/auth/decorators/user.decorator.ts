import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { Types } from "mongoose";
import { TokenPayload } from "tokens/token.types";

export type UserFromToken = {
	_id: Types.ObjectId;
} & TokenPayload;

export const User = createParamDecorator((_data: unknown, ctx: ExecutionContext): UserFromToken => {
	const request = ctx.switchToHttp().getRequest();
	const user = request.user as UserFromToken;
	if (user) {
		return {
			_id: new Types.ObjectId(user.id),
			...user
		};
	}
	return null;
});

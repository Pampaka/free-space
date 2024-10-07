import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { IS_ADMIN_KEY } from "../decorators/admin.decorator";
import { TokenPayload } from "tokens/token.types";

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const isAdmin = this.reflector.getAllAndOverride<boolean>(IS_ADMIN_KEY, [
			context.getHandler(),
			context.getClass()
		]);
		if (!isAdmin) return true;

		const user = context.switchToHttp().getRequest()?.user as TokenPayload;
		if (!user.isAdmin) {
			throw new ForbiddenException("Нет доступа");
		}

		return true;
	}
}

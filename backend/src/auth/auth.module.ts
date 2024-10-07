import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersModule } from "users/users.module";
import { TokensModule } from "tokens/tokens.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./guards/auth.guard";
import { AdminGuard } from "./guards/admin.guard";

@Module({
	imports: [UsersModule, TokensModule],
	providers: [
		AuthService,
		{
			provide: APP_GUARD,
			useClass: AuthGuard
		},
		{
			provide: APP_GUARD,
			useClass: AdminGuard
		}
	],
	controllers: [AuthController]
})
export class AuthModule {}

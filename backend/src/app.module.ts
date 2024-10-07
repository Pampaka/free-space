import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppConfigType, configuration } from "config/configuration";
import { AppLoggerModule } from "app-logger/app-logger.module";
import { AuthModule } from "./auth/auth.module";
import { MongooseModule } from "@nestjs/mongoose";
import { TokensModule } from "tokens/tokens.module";
import { UsersModule } from "./users/users.module";
import { BoardsModule } from "./boards/boards.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration],
			isGlobal: true
		}),
		AppLoggerModule,
		MongooseModule.forRootAsync({
			inject: [configuration.KEY],
			useFactory: (config: AppConfigType) => {
				return {
					uri: config.db.uri
				};
			}
		}),
		AuthModule,
		TokensModule,
		UsersModule,
		BoardsModule
	]
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppConfigType, configuration } from "config/configuration";
import { AppLoggerModule } from "app-logger/app-logger.module";
import { AppLogger } from "app-logger/app-logger";

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration],
			isGlobal: true
		}),
		AppLoggerModule,
		SequelizeModule.forRootAsync({
			inject: [configuration.KEY, AppLogger],
			useFactory: (config: AppConfigType, logger: AppLogger) => {
				logger.setContext("Sequelize");
				return {
					dialect: "postgres",
					host: config.db.host,
					port: config.db.port,
					username: config.db.user,
					password: config.db.password,
					database: config.db.name,
					autoLoadModels: true,
					logging: (message: string) => logger.verbose(message)
				};
			}
		})
	]
})
export class AppModule {}

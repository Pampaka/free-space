import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppConfigType, configuration } from "config/configuration";
import { AppLoggerModule } from "app-logger/app-logger.module";
import { MongooseModule } from "@nestjs/mongoose";

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
		})
	]
})
export class AppModule {}

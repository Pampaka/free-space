import { NestFactory } from "@nestjs/core";
import { setupApp } from "setup-app";
import { version } from "../package.json";
import { AppModule } from "./app.module";
import { AppConfigType, configuration } from "./config/configuration";
import { AppLogger } from "app-logger/app-logger";

async function start() {
	const app = await NestFactory.create(AppModule, { bufferLogs: true });

	const config = app.get<AppConfigType>(configuration.KEY);
	setupApp(app, config);

	await app.listen(config.port, async () => {
		const logger = await app.resolve(AppLogger);
		logger.setContext("App");
		logger.log(`Server running on port ${config.port}`);
		logger.log(`Server version: ${version}`);
	});
}

start();

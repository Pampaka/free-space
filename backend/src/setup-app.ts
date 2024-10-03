import { INestApplication } from "@nestjs/common";
import * as cookieParser from "cookie-parser";
import { AppConfigType } from "./config/configuration";
import { ValidatePipe } from "./shared/pipes/validate.pipe";
import { AppLogger } from "app-logger/app-logger";

// функция вынесена для использования в тестах
export function setupApp(app: INestApplication, config: AppConfigType) {
	app.useLogger(new AppLogger(config));
	app.setGlobalPrefix("api");
	app.useGlobalPipes(new ValidatePipe());
	app.enableCors({ origin: true, credentials: true });
	app.use(cookieParser());
}

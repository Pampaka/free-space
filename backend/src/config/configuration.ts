import { LogLevel } from "@nestjs/common";
import { registerAs, ConfigType } from "@nestjs/config";
import { Providers } from "consts";

export type AppConfigType = ConfigType<typeof configuration>;

const configuration = registerAs(Providers.APP_CONFIG, () => {
	return {
		port: Number(process.env.APP_PORT) || 5000,
		logger: {
			levels: getLogLevels(process.env.LOG_LEVEL),
			colorized: process.env.LOG_COLORIZE === "true"
		},
		db: {
			host: process.env.DB_HOST || "localhost",
			port: Number(process.env.DB_PORT) || 5432,
			user: process.env.DB_USER || "postgres",
			password: process.env.DB_PASSWORD || "password",
			name: process.env.DB_NAME || "postgres"
		}
	};
});

const getLogLevels = (logLevel?: string): LogLevel[] => {
	let logs: LogLevel[] = [];
	switch (logLevel?.toLocaleLowerCase?.()) {
		case "error":
			logs = ["fatal", "error"];
			break;
		case "warn":
			logs = ["fatal", "error", "warn"];
			break;
		case "log":
			logs = ["fatal", "error", "warn", "log"];
			break;
		case "debug":
			logs = ["fatal", "error", "warn", "log", "debug"];
			break;
		case "verbose":
			logs = ["fatal", "error", "warn", "log", "debug", "verbose"];
			break;
		default:
			logs = ["fatal"];
	}

	return logs;
};

export { configuration };

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
		user: {
			name: "Администратор",
			login: process.env.USER_LOGIN || "admin",
			password: process.env.USER_PASS || "password"
		},
		db: {
			uri: `mongodb://${process.env.DB_USER || "free_space_user"}:${
				process.env.DB_PASSWORD || "password"
			}@${process.env.DB_HOST || "localhost"}:${
				process.env.DB_PORT || "27017"
			}/${process.env.DB_NAME || "free_space"}`
		},
		jwt: {
			refreshExpires: Number(process.env.JWT_REFRESH_EXPIRES) || 30 * 24 * 60 * 60 * 1000,
			accessExpires: Number(process.env.JWT_ACCESS_EXPIRES) || 10 * 60 * 1000,
			refreshSecret: process.env.JWT_REFRESH_SECRET || "secret",
			accessSecret: process.env.JWT_ACCESS_SECRET || "secret"
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

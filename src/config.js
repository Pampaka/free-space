const config = {
	port: process.env.PORT,
	database: {
		host: process.env.DB_HOST || "localhost",
		port: Number(process.env.DB_PORT) || 5432,
		name: process.env.DB_NAME || "postgres",
		user: process.env.DB_USER || "postgres",
		password: process.env.DB_PASSWORD || "password"
	},
	redis: {
		host: process.env.REDIS_HOST || "localhost",
		port: Number(process.env.REDIS_PORT) || 6379,
		password: process.env.REDIS_PASSWORD || "password"
	},
	jwt: {
		refreshExpires: Number(process.env.JWT_REFRESH_EXPIRES) || 30 * 24 * 60 * 60 * 1000,
		accessExpires: Number(process.env.JWT_ACCESS_EXPIRES) || 10 * 60 * 1000,
		refreshSecret: process.env.JWT_REFRESH_SECRET || "secret",
		accessSecret: process.env.JWT_ACCESS_SECRET || "secret"
	}
};

module.exports = { config };

module.exports = {
	production: {
		username: process.env.DB_USER || "postgres",
		password: process.env.DB_PASSWORD || "password",
		database: process.env.DB_NAME || "free-space",
		host: process.env.DB_HOST || "localhost",
		port: process.env.DB_PORT || 5432,
		seederStorage: "sequelize",
		dialect: "postgres"
	}
};

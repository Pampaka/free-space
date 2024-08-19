const config = {
	port: process.env.PORT,
	database: {
		host: process.env.DB_HOST || "localhost",
		port: process.env.DB_PORT || 5432,
		name: process.env.DB_NAME || "postgres",
		user: process.env.DB_USER || "postgres",
		password: process.env.DB_PASSWORD || "password"
	}
};

module.exports = { config };
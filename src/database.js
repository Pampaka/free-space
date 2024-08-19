const { Sequelize } = require("sequelize");
const { config } = require("./config");

const sequelize = new Sequelize({
	host: config.database.host,
	port: config.database.port,
	username: config.database.user,
	database: config.database.name,
	password: config.database.password,
	dialect: "postgres"
});

const connect = async () => {
	await sequelize.authenticate();
};

module.exports = { sequelize, connect };
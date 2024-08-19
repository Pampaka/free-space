const express = require("express");
const { config } = require("./config");
const database = require("./database");

const start = async () => {
	await database.connect();
	const app = express();
	app.listen(config.port, () => {
		console.log("Server started");
	});
};

start();

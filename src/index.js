const express = require("express");
const { config } = require("./config");
const database = require("./database");
const router = require("./routes");
const { errorHandler } = require("./middlewares/error-handler");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const start = async () => {
	// await database.connect();
	const app = express();

	app.use(bodyParser.json());
	app.use(cookieParser());
	app.use("/api", router);
	app.use(errorHandler);

	app.listen(config.port, () => {
		console.log("Server started");
	});
};

start();

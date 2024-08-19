const express = require("express");

const start = async () => {
	const app = express();
	app.listen(5000, () => {
		console.log("Server started");
	});
};

start();

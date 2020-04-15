const express = require("express");

const PORT = process.env.PORT || 4001;

const app = express();

app.get("/", function (req, res) {
	res.json("Welcome to the Express server");
});

app.listen(PORT, function (req, res) {
	console.log(`The server is listening on port: ${PORT}`);
});

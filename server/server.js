require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cors from "express-cors";
import session from "express-session";
import db from "./db/dbConnection";

const PORT = process.env.PORT || 4001;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	session({
		secret: process.env.SESSIONSECRET,
		resave: false,
		saveUninitialized: false,
	})
);

app.get("/", function (req, res) {
	res.send("Welcome to the Express server");
});

app.listen(PORT, function (req, res) {
	console.log(`The server is listening on port: ${PORT}`);
});

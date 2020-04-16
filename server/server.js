require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cors from "express-cors";
import session from "express-session";
// importing to activate the database.
import db from "./db/dbConnection";
import userRegister from "./routes/userRegister";
import userLogin from "./routes/userLogin";
import userFind from "./routes/userFind";
import userDelete from "./routes/userDelete";
// the port that we will host the application, or that we get the port from the process.
const PORT = process.env.PORT || 4001;

// getting the express app.
const app = express();

// have it use various opjects that we will use in the application
// starting with cors, that will allow us it with react
app.use(cors());
// the middleware that will allow use to get the information
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// to store the user session
app.use(
	session({
		secret: process.env.SESSIONSECRET,
		resave: false,
		saveUninitialized: false,
	})
);

// the main page.
app.get("/", function (req, res) {
	res.send("Welcome to the Express server");
});

userRegister(app);

userLogin(app);

userFind(app);

userDelete(app);

// listening on to the app
app.listen(PORT, (req, res) => {
	console.log(`> The server is listening on port: ${PORT}`);
});

export default app;

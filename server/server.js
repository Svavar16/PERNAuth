require("dotenv").config();
import express from "express";
import cors from "express-cors";
import session from "express-session";
import passport from "passport";
// importing to activate the database.
import db from "./db/dbConnection";
import userRegister from "./routes/userRegister";
import userLogin from "./routes/userLogin";
import userFind from "./routes/userFind";
import userDelete from "./routes/userDelete";
import userOnline from "./routes/userOnline";
import userAuth from "./routes/userAuth";

// the port that we will host the application, or that we get the port from the process.
const PORT = process.env.PORT || 4001;

// getting the express app.
const app = express();

// this will allow us to bypass the cors policy, since it requires preflight too send that to send to the backend.
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	next();
});

// have it use various opjects that we will use in the application
// starting with cors, that will allow us it with react
app.options("*", cors());
// the middleware that will allow use to get the information
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// to store the user session
app.use(
	session({
		secret: process.env.SESSIONSECRET,
		resave: false,
		saveUninitialized: false,
	})
);

app.use(passport.initialize());

require("./Middleware/passport")(passport);

// the main page.
app.get("/", function (req, res) {
	res.send("Welcome to the Express server");
});

userRegister(app);

userLogin(app);

userAuth(app);

userOnline(app);

userFind(app);

userDelete(app);

// listening on to the app
app.listen(PORT, () => {
	console.log(`> The server is listening on port: ${PORT}`);
});

export default app;

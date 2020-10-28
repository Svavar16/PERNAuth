require("dotenv").config();
import express from "express";
import cors from "express-cors";
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

// this is needed for cors, dont know why, works without this on my other apps
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// starting with cors, that will allow us it with react
app.use(cors());
// the middleware that will allow use to get the information
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// this will start with checking passport
app.use(passport.initialize());
// this is telling it where the strategy is
require("./Middleware/passport")(passport);

// the methods
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

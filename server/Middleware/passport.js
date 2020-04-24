require("dotenv").config();
import { userModel } from "../db/databaseCommands";
import helper from "./helper";
const localStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

// creating an object that will contain the things needed to work proberly
const opts = {};
// might not need this at all, lets see how this will go.
//opts.jwtFromCookie = (req) => req.cookie.jwt;
// getting the header from the bearer token
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// getting the secret from the .env file.
opts.secretOrKey = process.env.JWTSESSIONKEY;

// need to see if this is possible with ES6, but this works well like this
module.exports = (passport) => {
	// creating the passport JWT strategy
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
			userModel
				.findById(jwt_payload.id)
				.then((user) => {
					if (user) {
						done(null, user);
					}
					done(null, false);
				})
				.catch((error) => console.log(error));
		})
	);
};

require("dotenv").config();
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const helper = {
	// encrypt the new password
	setPassword(password) {
		return bcrypt.hashSync(password, bcrypt.genSaltSync(12));
	},

	// compare the password, if they are a match, it return true, else false
	comparePassword(password, userPassword) {
		return bcrypt.compareSync(password, userPassword);
	},

	// a function to create a JWT token
	createJwtToken(payload) {
		const token = Jwt.sign({ id: payload.id }, process.env.JWTSESSIONKEY, {
			expiresIn: "7d",
		});
		return token;
	},
};

export default helper;

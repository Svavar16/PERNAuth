import bcrypt from "bcrypt";

const helper = {
	// encrypt the new password
	setPassword(password) {
		const salt = bcrypt.genSaltSync(12);
		return bcrypt.hashSync(password, salt);
	},

	// compare the password, if they are a match, it return true, else false
	comparePassword(password, userPassword) {
		return bcrypt.compareSync(password, userPassword);
	},

	// a function to create a JWT
	createWebToken(user) {
		return 0;
	},
};

export default helper;

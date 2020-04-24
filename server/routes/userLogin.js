import { userModel } from "../db/databaseCommands";
import helper from "../Middleware/helper";

export default (app) => {
	/**
	 * the user login system
	 * {returns a jwt token}
	 */
	app.post("/userLogin", async (req, res) => {
		try {
			const { username, password } = req.body;
			// see if we have the user in the database. getting it from the databaseCommand.js
			const foundUser = await userModel.findByUsername(username);
			// if we find one.
			if (foundUser[0]) {
				// then we will see if the password is correct
				if (helper.comparePassword(password, foundUser[0].password)) {
					// and after we have confirmed the password, we will create the JWT payload
					const payload = {
						// we seend the id, foundUser returns an array
						// and we need to access the first element in the array
						id: foundUser[0].id,
					};
					// and here we create the token
					const token = helper.createJwtToken(payload);
					// and if there are no problems, we return status 200.
					if (token) {
						res.status(200).send(token);
					}
				}
				// if we dont find the user, we return 401
			} else {
				res.status(401).end();
			}
			// otherwise we are experiencing somekind of a difficult, and return status 500
		} catch (error) {
			res.status(500).end();
		}
	});
};

import { userModel } from "../db/databaseCommands";
import helper from "../Middleware/helper";

export default (app) => {
	// should register the user, just created the user object in the database,
	//  with bcrypt from helper that hashes the password
	app.post("/userRegister", async (req, res) => {
		try {
			const { username, role } = req.body;
			const hashedPassword = helper.setPassword(req.body.password);
			const user = {
				username: username,
				password: hashedPassword,
				role: role,
			};
			const createdUser = await userModel.create(user);
			if (createdUser) {
				res.status(200).send(createdUser);
			}
		} catch (error) {
			console.log(error);
			res.status(500).end();
		}
	});
};

import { userModel } from "../db/databaseCommands";
import helper from "../Middleware/helper";

export default (app) => {
	app.get("/userRegister", async (req, res) => {
		res.send("From register");
	});

	app.post("/userRegister", async (req, res) => {
		try {
			const { username, role } = req.body;
			const password = helper.setPassword(req.body.password);
			const user = {
				username,
				password,
				role,
			};
			const createdUser = await userModel.create(user);
			if (createdUser) {
				res.status(200).end();
			} else {
				res.status(500).end();
			}
		} catch (error) {
			res.status(500).end();
		}
	});
};

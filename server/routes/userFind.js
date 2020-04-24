import { userModel } from "../db/databaseCommands";

export default (app) => {
	/**
	 * have this, dont know if i will actually use it.
	 * but it should
	 * {return the user}
	 */
	app.post("/userFind", async (req, res) => {
		try {
			const username = req.body;
			const foundUser = await userModel.findByUsername(username);
			if (foundUser) {
				res.status(200).end();
			}
		} catch (error) {
			console.log(error);
			res.status(500).end();
		}
	});
	app.get("/userFind/:id", async (req, res) => {
		try {
			const foundUser = await userModel.findById(req.params.id);
			if (foundUser) {
				res.status(200).send(foundUser);
			}
		} catch (error) {
			res.status(400).end();
		}
	});
};

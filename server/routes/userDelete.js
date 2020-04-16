import { userModel } from "../db/databaseCommands";

export default (app) => {
	app.get("/userDelete", async (req, res) => {
		res.send("From user delete");
	});

	app.delete("/userDelete/:id", async (req, res) => {
		try {
			const deletedUser = await userModel.findByIdAndDelete(
				req.params.id
			);
			if (deletedUser) {
				res.status(200).end();
			} else {
				res.status(500).end();
			}
		} catch (error) {
			res.status(500).end();
		}
	});
};

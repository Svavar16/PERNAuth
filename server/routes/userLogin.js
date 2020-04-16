import { userModel } from "../db/databaseCommands";

export default (app) => {
	app.get("/userLogin", async (req, res) => {
		res.send("From user login");
	});
};

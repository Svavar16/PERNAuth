import user from "../db/databaseCommands";

export default (app) => {
	app.get("/userFind", (req, res) => {
		res.send("From find user");
	});
};

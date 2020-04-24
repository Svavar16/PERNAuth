export default (app) => {
	/**
	 * should check if i should add the passport jwt here
	 * and then it should
	 * {return the current user}
	 */
	app.get("/userOnline", (req, res) => {
		if (req.user) {
			res.status(200).send(req.user);
		} else {
			res.status(401).end();
		}
	});
};

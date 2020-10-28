import passport from "passport";

/**
 * this might be conflicting with the userOnline idea, does the same thing
 * but it should
 * {return the current user}
 */
export default (app) => {
	app.post(
		"/api/userAuth",
		passport.authenticate("jwt", { session: false }),
		(req, res) => {
			res.status(200).send(req.user[0]);
		}
	);
};

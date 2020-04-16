import chai from "chai";
import chaihttp from "chai-http";
import app from "../server";

chai.use(chaihttp);
chai.should();

describe("Users testing", () => {
	it("register users", (done) => {
		chai.request(app)
			.post("/userRegister")
			.send({
				username: "Test",
				password: "TestPassword",
				role: "inkling",
			})
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
	});
	it("delete a user", (done) => {
		chai.request(app)
			.delete("/userDelete/1")
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
	});
});

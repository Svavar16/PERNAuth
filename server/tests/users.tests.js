import chai from "chai";
import chaihttp from "chai-http";
import app from "../server";
import { userModel } from "../db/databaseCommands";

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
	it("Find a user by username", (done) => {
		chai.request(app)
			.post("/userFind")
			.send({ username: "test" })
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
	});
	it("get the current you", (done) => {
		chai.request(app)
			.get("/userOnline")
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
	});
	it("login in a user", (done) => {
		chai.request(app)
			.post("/userLogin")
			.send({ username: "Test", password: "TestPassword" })
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
	});
	it("delete a user", (done) => {
		userModel
			.findByUsername("Test")
			.then((foundUser) => {
				chai.request(app)
					.delete(`/userDelete/${foundUser[0].id}`)
					.end((err, res) => {
						res.should.have.status(200);
						done();
					});
			})
			.catch((error) => console.log(error));
	});
});

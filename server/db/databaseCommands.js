import sql from "./dbConnection";

export const userModel = {
	create(user) {
		return sql`insert into Users ${sql(
			user,
			"username",
			"password",
			"role"
		)} returning * ;`;
	},
	find() {
		return sql`select * from Users: returning * `;
	},
	findById(id) {
		const foundUser = sql`select * from Users where id = ${id} returning * ;`;
		return foundUser[0];
	},
	findByUsername(username) {
		return sql`select * from Users where username = ${username} returning * ;`;
	},
	findByIdAndUpdate(user) {
		return sql`update Users set ${sql(
			user,
			"username",
			"password",
			"role"
		)} where id = ${user.id} returning * ;`;
	},
	findByIdAndDelete(id) {
		return sql`delete from Users where id = ${id};`;
	},
};

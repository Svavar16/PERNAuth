import sql from "./dbConnection";

export const userModel = {
	// should create a new user
	create(user) {
		return sql`insert into Users ${sql(
			user,
			"username",
			"password",
			"role"
		)} returning * ;`;
	},
	// should return all the users
	find() {
		return sql`select * from Users: returning * `;
	},
	// find a user by id
	findById(id) {
		return sql`select * from Users where id = ${id};`;
	},
	// find a user by username
	findByUsername(username) {
		return sql`select * from Users where username = ${username};`;
	},
	// find the user by id, and update the user(dont know if i will use it, but it's here)
	findByIdAndUpdate(user) {
		return sql`update Users set ${sql(
			user,
			"username",
			"password",
			"role"
		)} where id = ${user.id} returning * ;`;
	},
	// find the user by id and delete.
	findByIdAndDelete(id) {
		return sql`delete from Users where id = ${id};`;
	},
};

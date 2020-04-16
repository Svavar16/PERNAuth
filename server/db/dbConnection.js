require("dotenv").config();
import postgres from "postgres";

const sql = postgres(process.env.DATABASEURL, {
	port: process.env.POSTGRESQLPORT,
	database: process.env.pernauth,
	username: process.env.postgres,
	password: process.env.POSTGRESQLPASSWORD,
});

console.log("> Connected To postgreSQL");

export default sql;

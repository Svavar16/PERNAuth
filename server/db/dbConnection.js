require("dotenv").config();
import postgres from "postgres";

const sql = postgres(process.env.DATABASEURL, {
	port: process.env.POSTGRESQLPORT,
	username: process.env.POSTGRESQLUSER,
	password: process.env.POSTGRESQLPASSWORD,
	database: process.env.POSTGRESQLUSERDATABASENAME,
});

console.log("> Connected To postgreSQL");

export default sql;

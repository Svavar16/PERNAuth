import sql from "../db/dbConnection";

async function databasecreation() {
	try {
		await sql`DROP TABLE IF EXISTS Users`;

		await sql`create table Users (
            ID          serial not null primary key,
            username    varchar(50),
            password    varchar(100),
            role        varchar(20)
        );`;

		console.log("> database created");
		process.exit(0);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
}

databasecreation();

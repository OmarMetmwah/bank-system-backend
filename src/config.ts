import dotenv from 'dotenv';

dotenv.config();

export default {
	port: process.env.PORT,
	host: process.env.PG_HOST,
	dbport: process.env.PG_PORT,
	db: process.env.ENV === 'dev' ? process.env.PG_DB : process.env.PG_DB_TEST,
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
	dbURL:process.env.DATABASE_URL
};

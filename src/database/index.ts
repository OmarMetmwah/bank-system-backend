import { Pool } from 'pg';
import config from '../config';

const connectionString = config.dbURL

const pool = new Pool({
	connectionString
});

export default pool;

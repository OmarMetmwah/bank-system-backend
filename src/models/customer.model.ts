import Customer from '../types/customer.types';
import db from '../database';

class CustomerModel {
	//list
	async list(): Promise<Customer[]> {
		try {
			//open conncection
			const conncection = await db.connect();
			const query = 'SELECT name, email, lastTransaction, currentBalance FROM customers';
			//run query
			const result = await conncection.query(query);
			//release conncetion
			conncection.release();
			//return user
			return result.rows;
		} catch (err) {
			throw new Error(`Cannot Return Customers because ${(err as Error).message}`);
		}
	}
	//history
	async history(name:string): Promise<Customer[]> {
		try {
			//open conncection
			const conncection = await db.connect();
			const query = 'SELECT id, sender, reciever, timing, amount FROM transactions WHERE sender=$1 OR reciever=$1;';
			//run query
			const result = await conncection.query(query,[name]);
			//release conncetion
			conncection.release();
			//return user
			return result.rows;
		} catch (err) {
			throw new Error(`Cannot Return History because ${(err as Error).message}`);
		}
	}
	//make transaction
	async create(cusomer: Customer): Promise<any> {
		try {
			//open conncection
			const conncection = await db.connect();
			const query3 = `INSERT INTO customers(name, email, currentbalance)
            VALUES($1,$2,$3) RETURNING name, email, currentbalance`;
			const result = await conncection.query(query3, [cusomer.name, cusomer.email, cusomer.currentBalance]);
			//release conncetion
			conncection.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot make transaction because ${(err as Error).message}`);
		}
	}
}
export default CustomerModel;

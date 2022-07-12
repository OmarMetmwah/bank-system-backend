import Transaction from '../types/transaction.types';
import db from '../database';
import { rejects } from 'assert';
import { resolve } from 'path';

class TransactionModel {
	//list
	async list(): Promise<Transaction[]> {
		try {
			//open conncection
			const conncection = await db.connect();
			const query = 'SELECT id, sender, reciever, timing, amount FROM transactions';
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
	//make transaction
	async makeTransation(amount: number, from: string, to: string): Promise<Transaction> {
		try {
			//open conncection
			const conncection = await db.connect();
			const now = await conncection.query('SELECT now();');
			const ts = now.rows[0].now;
			
			const query = `UPDATE customers SET currentBalance=currentBalance-($1),lastTransaction=($2) WHERE "name"=($3)`;
			await conncection.query(query, [amount, ts, from]);

			const query2 = `UPDATE customers SET currentBalance=currentBalance+($1),lastTransaction=($2) WHERE "name"=($3)`;
			await conncection.query(query2, [amount, ts, to]);

			const query3 = `INSERT INTO transactions(sender, reciever, timing, amount)
            VALUES($1,$2,$3,$4) RETURNING id, sender, reciever, timing, amount`;
			const result = await conncection.query(query3, [from, to, ts, amount]);
			//release conncetion
			conncection.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot make transaction because ${(err as Error).message}`);
		}
	}
}
export default TransactionModel;

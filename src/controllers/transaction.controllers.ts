import config from '../config';
import { Request, Response, NextFunction } from 'express';
import TransactionModel from '../models/transaction.model';

const transactionModel = new TransactionModel();

export const list = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const users = await transactionModel.list();
		res.json({ status: 'success', data: users });
	} catch (err) {
		next(err);
	}
};

export const makeTransation = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const transaction = await transactionModel.makeTransation(req.body.amount, req.body.from, req.body.to);
		res.json({ status: 'success', data: `Transaction of size ${transaction.amount}$ from ${transaction.sender} to ${transaction.reciever}`});
	} catch (err) {
		res.json({ status: 'fail', data: (err as Error).message })
		next(err);
	}
};

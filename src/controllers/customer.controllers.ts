import config from '../config';
import { Request, Response, NextFunction } from 'express';
import CustomerModel from '../models/customer.model';

const customerModel = new CustomerModel();

export const list = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const users = await customerModel.list();
		res.json({ status: 'success', data: users });
	} catch (err) {
		next(err);
	}
};

export const history = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const users = await customerModel.history(req.params.name);
		res.json({ status: 'success', data: users });
	} catch (err) {
		next(err);
	}
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const cusomer = await customerModel.create(req.body);
		res.json({ status: 'success', data: cusomer});
	} catch (err) {
		res.json({ status: 'fail', data: (err as Error).message })
		next(err);
	}
};


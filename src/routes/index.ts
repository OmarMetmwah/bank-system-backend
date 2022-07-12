import { Router } from 'express';
import customerRoutes from './api/cutomer.routes';
import transactionRoutes from './api/transactions.routes'

const routes = Router();

routes.use('/customers', customerRoutes);
routes.use('/transactions', transactionRoutes);

export default routes;

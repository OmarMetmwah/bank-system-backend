import { Router } from 'express';
import * as controllers from '../../controllers/transaction.controllers';
const routes = Router();

routes.route('/').get(controllers.list).post(controllers.makeTransation);
export default routes;

import { Router } from 'express';
import * as controllers from '../../controllers/customer.controllers';
const routes = Router();

routes.route('/').get(controllers.list);
routes.route('/').post(controllers.create);
routes.route('/:name').get(controllers.history);
export default routes;

import { Router } from 'express';
import IssueController from './controllers/IssueController';
import IssueValidator from './validators/IssueValidator';

export const routes = Router();

routes.post('/issue', IssueValidator.create, IssueController.create);
routes.get('/issue/:id?', IssueController.read);
routes.delete('/issue/:id', IssueValidator.destroy, IssueController.destroy);
routes.put('/issue/:id', IssueValidator.update, IssueController.update);


import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

routes.get('/users', (request, response) => {
  // return response.send('Hello!');
  return response.json({ message: 'It works!' });
});


/*
  index, 
  show, 
  create, 
  update, 
  delete
*/
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', OrphanagesController.create);

export default routes;
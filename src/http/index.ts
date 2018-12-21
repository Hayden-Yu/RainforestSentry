import { Router } from 'express';
import { listing } from './listing';
import bodyParser = require('body-parser');

export const api = (express: Router) => {
  const router = Router();
  router.use(bodyParser.json());

  router.use(listing);
  express.use('/api', router);
}

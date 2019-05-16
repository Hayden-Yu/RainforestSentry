import { Router } from 'express';
import * as parser from 'cron-parser';
import subscriptionCreateSchema from '../../resources/subscription-create.schema.json';
import { schemaValidator } from "../util/schema-validator";

export const subscription = Router();

subscription.post('/subscription', (req, res, next) => {
  const validation = schemaValidator(subscriptionCreateSchema, req.body);
  if (validation !== true) {
    return res.status(400).send({
      errors: validation && validation.length ? validation : [],
    });
  }

  // TODO
});
import { Router } from "express";
import { getListing } from "../lib/amazon";
import listingSchema from '../../resources/listing.schema.json';
import { schemaValidator } from "../util/schema-validator";

export const listing = Router();

listing.post('/listing', (req, res, next) => {
  const validation = schemaValidator(listingSchema, req.body);
  if (validation !== true) {
    return res.status(400).send({
      errors: validation && validation.length ? validation : [],
    });
  }
  return getListing(req.body.url)
      .then(result => res.send(result));
});

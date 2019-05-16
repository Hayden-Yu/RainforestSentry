import { Router } from "express";
import getListing from "../lib/amazon";
import ajv from 'ajv';
import listingSchema from '../../resources/listing.schema.json';

export const listing = Router();
const ajv_ = new ajv();

listing.post('/listing', (req, res, next) => {
  const listingValidation = ajv_.compile(listingSchema);
  if (!listingValidation(req.body)) {
    const resBody = {
      errors: <any[]>[],
    };
    if (listingValidation.errors && listingValidation.errors.length) {
      resBody.errors = listingValidation.errors.map(e => {
        return {
          params: e.params,
          message: e.message,
        };
      });
    }
    return res.status(400).send(resBody);
  }
  return getListing(req.body.url)
      .then(result => res.send(result));
});

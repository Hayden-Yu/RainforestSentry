import { Router } from "express";
import getListing from "../lib/amazon";

export const listing = Router();

listing.post('/listing', (req, res, next) => {
  if (!req.body.url) {
    res.status(400).send();
  } else {
    getListing(req.body.url)
      .then(result => res.send(result));
  }
});

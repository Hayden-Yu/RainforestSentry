import express from 'express';
import dotenv from 'dotenv';
import { logger } from './config/logger';
import { api } from './http';

dotenv.config();
const port = process.env.SERVER_PORT || 3000;
const server = express();
api(server);

server.listen(port, () => logger.info(`express server listening on port ${port}`));

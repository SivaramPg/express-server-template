import express from 'express';

import { routes } from './routes';
import { middlewares } from './middlewares';

export const app = express();

routes(app);
middlewares(app);

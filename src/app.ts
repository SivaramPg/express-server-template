import express, { Request, Response, NextFunction } from 'express';

import { routes } from './routes';
import { middlewares } from './middlewares';

process.on('uncaughtException', (error) => {
  console.log('Something terrible happened: ', error);
  process.exit(1); // exit application
});

process.on('unhandledRejection', (error, promise) => {
  console.log('We forgot to handle a promise rejection here: ', promise);
  console.log('The error was: ', error);
});

export const app = express();
/**
 * ! Middleware applied to the application inside the middlewares.js file.
 */
middlewares(app);

/**
 * ! All Route definitions go inside routes.js file
 */
routes(app);

// Catch all handler to set route not found.
app.use((req: Request, res: Response, next: NextFunction) => {
  next({
    status: 404,
    message: 'Not Found',
  });
});

interface ErrorWithStatus extends Error {
  status?: number;
}

// Global error handler function
app.use(
  (err: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('invalid token...');
    }
    if (err.status === 404) {
      res.status(err.status).send(err.message);
    } else if (err.status === 500) {
      res.status(err.status).send(err.message);
    }
  }
);

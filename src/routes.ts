import { Application } from 'express';

export const routes = (app: Application) => {
  // Health Check Route for the Load Balancer
  app.get('/', (req, res) => {
    res.status(200).send('Server is up!');
  });
};

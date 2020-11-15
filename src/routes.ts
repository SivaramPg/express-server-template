import { Application } from 'express';

export const routes = (app: Application) => {
  app.get('/', (req, res) => {
    res.status(200).send('Hello Hello');
  });
};

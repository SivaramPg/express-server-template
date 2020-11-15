import { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

export const middlewares = (app: Application) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(helmet());
  app.use(morgan('dev'));
};

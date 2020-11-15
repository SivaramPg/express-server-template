import * as dotenv from 'dotenv-safe';
dotenv.config();

import http from 'http';

import { app } from './app';

const server = http.createServer(app);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});

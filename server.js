import express from 'express';
import http from 'http';

import defaultMiddlewares from './backend/middlewares/app.middleware';

class App {
  constructor() {
    this.port = process.env.PORT || 3040;
    this.host = process.env.HOST || '127.0.0.1'
  }

  static start() {
    (new App()).configure();
  }

  configure() {
    const app = express();
    const server = http.createServer(app);

    defaultMiddlewares(app, express);

    app.get('/', (req, res, next) => {
      res.render('index', { title: 'Hey', message: 'Hello there!' });
    });

    app.get('*', (req, res) => {
      res.render('error', {
        statusCode: 404,
        status: 'Not found'
      });
    });

    server.listen(this.port, this.host);
    console.log(`Server is running on ${this.host}:${this.port}`);
  }
}

App.start();

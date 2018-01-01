import express from 'express';
import http from 'http';
import dotenv from'dotenv';

import defaultMiddlewares from './middlewares/app.middleware';
import RouterHelper from './helpers/router.helper';
import config from './config/config';
import sequelize from './db';

const env = dotenv.load();

class App {
  constructor() {
    this.port = process.env.PORT || config.port;
    this.host = process.env.HOST || config.host;
  }

  static start() {
    (new App()).configure();
  }

  configure() {
    const app = express();
    const server = http.createServer(app);

    // init all middlewares
    defaultMiddlewares(app, express);

    // connect to db
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });

    // create routes
    const routerHelper = new RouterHelper(app);
    routerHelper.generate();

    // run server
    server.listen(this.port, this.host, (error) => {
      if (error) {
        console.log(error.message);
      } else {
        console.log(`Server is running on ${this.host}:${this.port}`);
      }
    });
  }
}

App.start();


import express from 'express';
import routes from '../config/routes';

const Router = express.Router();

export default class RouterHelper {
  constructor(app) {
    this.app = app;
    this.routes = routes;
  }

  generate() {
    this.routes.forEach((item) => {
      this.app.use(item.path, item.router.createRouter(Router));
    });

    // Catch not found route
    this.app.get('*', (req, res) => {
      res.render('error', {
        statusCode: 404,
        status: 'Not found'
      });
    });
  }
}
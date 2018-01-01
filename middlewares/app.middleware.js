import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import compression from 'compression';
import morgan from 'morgan';
import fs from 'fs';

import errorHandle from './error-handle.middleware';

export default function (app, express) {
  const environment = process.env.NODE_ENV || 'development';
  const accessLogStream = fs.createWriteStream('logs/log.log', {flags: 'a'});

  app.use(express.static('public'));
  app.set('view engine', 'pug');
  app.set('views', 'views');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride());
  app.use(morgan('combined', { stream: accessLogStream }));
  app.use(errorHandle);

  if (environment === 'production') {
    app.use(compression());
  }
};


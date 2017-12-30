import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import compression from 'compression';
import path from 'path';
import errorHandler from 'errorhandler';
import morgan from 'morgan';

export default function (app, express) {
  const environment = process.env.NODE_ENV || 'development';
  const rootPath = process.cwd();

  app.use(express.static(`${rootPath}/public`));
  app.set('view engine', 'pug');
  app.set('views', `${rootPath}/backend/templates`);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride());
  app.use(morgan('combined'));

  if (environment === 'production') {
    app.use(compression());
  } else if (environment === 'development') {
    app.use(errorHandler());
  }
};
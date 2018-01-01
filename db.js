import Sequelize from 'sequelize';
import dbConfig from './config/db';

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(
  dbConfig[env].database,
  dbConfig[env].username,
  dbConfig[env].password,
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  }
);

export default sequelize;
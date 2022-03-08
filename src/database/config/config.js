require('dotenv').config();

const {
  DEV_DB_USERNAME,
  DEV_DB_PASSWORD,
  DEV_DB_NAME,
  DEV_DB_HOSTNAME,
  DEV_DB_PORT,
  CI_DB_USERNAME,
  CI_DB_PASSWORD,
  CI_DB_NAME,
  CI_DB_HOSTNAME,
  CI_DB_PORT,
  PROD_DB_USERNAME ="vajzngiqbxnplt",
  PROD_DB_PASSWORD="a9613c49126d096b3150b4aa91f4ab03ab9b946ee0dc10d27bbdf5b167dfb516",
  PROD_DB_NAME="d906ajlvflkqi6",
  PROD_DB_HOSTNAME="ec2-3-230-238-86.compute-1.amazonaws.com",
  PROD_DB_PORT="5432",
} = process.env;

module.exports = {
  development: {
    username: DEV_DB_USERNAME,
    password: DEV_DB_PASSWORD,
    database: DEV_DB_NAME,
    host: DEV_DB_HOSTNAME,
    port: DEV_DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: CI_DB_USERNAME,
    password: CI_DB_PASSWORD,
    database: CI_DB_NAME,
    host: CI_DB_HOSTNAME,
    port: CI_DB_PORT,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  },
  production: {
    username: PROD_DB_USERNAME,
    password: PROD_DB_PASSWORD,
    database: PROD_DB_NAME,
    host: PROD_DB_HOSTNAME,
    port: PROD_DB_PORT,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  },
};

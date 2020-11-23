module.exports = {
  development: {
    port: 5432,
    username: '',
    password: '',
    database: 'dogs',
    host: '',
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 10,
      idle: 30000,
      acquire: 80000,
    },
  },
  production: {
    port: process.env.LOCAL_DB_PORT,
    username: process.env.LOCAL_DB_USERNAME,
    password: process.env.LOCAL_DB_PASS,
    database: 'instalocal',
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 10,
      idle: 30000,
      acquire: 80000,
    },
  },
};

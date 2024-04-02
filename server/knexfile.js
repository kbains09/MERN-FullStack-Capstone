require('dotenv').config(); // Load env variables from .env file
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


module.exports = {
  // development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DBNAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      charset: 'utf8',
    },

  // }
};


const { Pool } = require('pg');

const { DB } = require('./config');


const pool = new Pool({
  user: DB.PGUSER,
  host: DB.PGHOST,
  database: DB.PGDATABASE,
  password: DB.PGPASSWORD,
  port: DB.PGPORT,
});
//here i am getting all the information from my database 

pool.connect();

module.exports = pool;
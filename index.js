

const dotenv = require('dotenv');

dotenv.config({path:'./config/config.env'});

const { Pool } = require('pg');

/*const dotenv = require("dotenv");
dotenv.config();*/
//require("dotenv").config();

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

/*pool.query(`SELECT * FROM customers`, (err, res)=> {
  if(!err){
      console.log(res.rows);
  } else {
    console.log(err.message);
  }
  pool.end;
}) */
//wrote a query to select all customers from my database 

/*module.exports = {
  query: (text, params) => pool.query(text, params)
}*/

module.exports = pool;
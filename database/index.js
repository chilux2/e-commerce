
/*const path = require('path');
require('dotenv').config({
  override: true,
  path: path.join(__dirname, '.env')
});*/

const { Pool } = require('pg');

const dotenv = require("dotenv");
dotenv.config();

const { DB } = require('../config');


const pool = new Pool({
  user: DB.PGUSER,
  host: DB.env.PGHOST,
  database: DB.env.PGDATABASE,
  password: DB.env.PGPASSWORD,
  port: DB.env.PGPORT,
});


/*(async () => {

  const client = await pool.connect();
    try {
    const {rows} = await client.query('SELECT current_user');
    const currentUser = rows[0]['current_user']
    console.log(currentUser);
    } catch(err) {
      console.error(err);
    } finally {
      client.release();
    }

})();
*/

module.exports = {
  query: (text, params) => pool.query(text, params)
}

//module.exports = pool;
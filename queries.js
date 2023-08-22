
const path = require('path');
require('dotenv').config({
  override: true,
  path: path.join(__dirname, '.env')
});

const { Pool, Client } = require('pg');


const pool = new Pool({
  DB_USER: process.env.DB_USER,
  DB_HOST: process.env.DB_HOST,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT,
});

(async () => {

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

/*module.exports = {
  query: (text, params) => pool.query(text, params)
}*/

module.exports = pool;
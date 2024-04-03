const pool = require('../index');

module.exports = {
    async getUser(username) {
        const user = await pool.query('SELECT * FROM customers WHERE username = $1', [username]);
        return user.rows[0];
    }
}
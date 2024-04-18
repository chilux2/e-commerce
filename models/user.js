const pool = require('../index');

module.exports = class UserModel {
    /**
     * Finds a user record by email
     * @param  {String}      email [Email address]
     * @return {Object|null}       [User record]
     */
    async findOneByEmail(customer_email) {
      try {
  
        // Generate SQL statement
        const statement = `SELECT *
                           FROM customers
                           WHERE customer_email = $1`;
        const values = [customer_email];
    
        // Execute SQL statment
        const result = await pool.query(statement, values);
  
        if (result.rows?.length) {
          return result.rows[0]
        }
    
        return null;
  
      } catch(err) {
        throw new Error(err);
      }
    }
  
  }
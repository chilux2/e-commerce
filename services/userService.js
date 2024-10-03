const createError = require('http-errors');
const UserModel = require('../models/user');
const UserModelInstance = new UserModel();

const db = require('../index')
//module.exports = class UserService {

  module.exports = {
    // Get user from database by username
    async getUser(username) {
        const user = await db.query('SELECT * FROM customers WHERE username = $1', [username]);
        return user.rows[0];
    },

    async getUserById(id) {
        const user = await db.query('SELECT * FROM customers WHERE id = $1', [id]);
        return user.rows[0];
    },

    async deleteUser(id) {
        return db.query('DELETE FROM customers WHERE id = $1', [id]);
    },

    
  




  /*async get(data) {

    const { id } = data;

    try {
      // Check if user already exists
      const user = await UserModelInstance.findOneById(id);

      // If user doesn't exist, reject
      if (!user) {
        throw createError(404, 'User record not found');
      }

      return user;

    } catch(err) {
      throw err;
    }

  };

  async update(data) {

    try {
      // Check if user already exists
      const user = await UserModelInstance.update(data);

      return user;

    } catch(err) {
      throw err;
    }

  };*/

}
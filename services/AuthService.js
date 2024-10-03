//const createError = require('http-errors');
//const UserModel = require('../models/user');
//const UserModelInstance = new UserModel();
const bcrypt = require('bcrypt');
module.exports = class AuthService {

  isLoggedIn(req, res, next) {
    const message = req.path === '/logout' ? 'Nothing to do here' : 'Please log in first';
    if (!req.isAuthenticated()) return res.status(401).send(message);
    next();
}
// Hash and salt a password
async passwordHash(password, saltRounds) {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (err) {
        console.log(err);
    }
    return null;
}
/*
  async register(data) {

    const { email } = data;

    try {
      // Check if user already exists
      const user = await UserModelInstance.findOneByEmail(email);

      // If user already exists, reject
      if (user) {
        throw createError(409, 'Email already in use');
      }

      // User doesn't exist, create new user record
      return await UserModelInstance.create(data);

    } catch(err) {
      throw createError(500, err);
    }

  };

  async login(data) {

    const { email, password } = data;

    try {
      // Check if user exists
      const user = await UserModelInstance.findOneByEmail(email);

      // If no user found, reject
      if (!user) {
        throw createError(401, 'Incorrect username or password');
      }

      // Check for matching passwords
      if (user.password !== password) {
        throw createError(401, 'Incorrect username or password');
      }

      return user;

    } catch(err) {
      throw createError(500, err);
    }

  }; 
*/
}
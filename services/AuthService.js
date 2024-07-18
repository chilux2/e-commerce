const UserModel = require('../models/user');
const UserModelInstance = new UserModel();


module.exports = class AuthService {

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
  
  }
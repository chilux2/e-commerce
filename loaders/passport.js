const passport = require('passport');
const localStrategy = require('passport-local');

//const AuthService = require('../services/AuthService');
//const AuthServiceInstance = new AuthService();
const { getUser } = require('../services/UserService');
const bcrypt = require('bcrypt');

module.exports = (app) => {

  // Initialize passport
  /*app.use(passport.initialize());  
  app.use(passport.session()); */

  app.use(passport.initialize(), passport.session());

  passport.use(
    new localStrategy(async function (username, password, done) {
        const failMessage = { message: 'Incorrect username or password.' }
        try {
            const user = await getUser(username);
            if (!user) return done(null, false, failMessage);

            const matchedPassword = await bcrypt.compare(password, user.password);
            if (!matchedPassword) return done(null, false, failMessage);

            return done(null, user);
        } catch (error) {
            return done(error);
        }

    })
);

passport.serializeUser((user, done) => {
    done(null, {
        id: user.id,
        username: user.user_name
    });
});

passport.deserializeUser((user, done) => {
    done(null, user)
})



  
  // Set method to serialize data to store in cookie
  /*passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  // Set method to deserialize data stored in cookie and attach to req.user
  passport.deserializeUser((id, done) => {
    done(null, { id });
  });

  // Configure local strategy to be use for local login
  passport.use(new LocalStrategy(
    async (username, password, done) => {
      try {
        const user = await AuthServiceInstance.login({ email: username, password });
        return done(null, user);
      } catch(err) {
        return done(err);
      }
    }
  ));

  return passport;
*/
}
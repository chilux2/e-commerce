
const passport = require('passport');
//const LocalStrategy = require("passport-local").Strategy;
const LocalStrategy = require('passport-local');
const pool = require('../index');
const bcrypt = require('bcrypt');
const { getUser } = require('../services/userService');

const AuthService = require('../services/AuthService');
const AuthServiceInstance = new AuthService();

module.exports = (app) => {

  // Initialize passport
  app.use(passport.initialize());  
  app.use(passport.session());
  
  // Set method to serialize data to store in cookie
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  // Set method to deserialize data stored in cookie and attach to req.user
  passport.deserializeUser((id, done) => {
    done(null, { id });
  });

  // Configure local strategy to be use for local login
  passport.use('local', new LocalStrategy(
    async (username, password, done) => {
      try {
        const user = await AuthServiceInstance.login({ customer_email: username, password });
        return done(null, user);
      } catch(err) {
        return done(err);
      }
    }
  ));

  return passport;

}







/*
module.exports = (app) => {

  app.use(passport.initialize(), passport.session());
  
  // Configure passport local strategy
  passport.use(
      new LocalStrategy(async function (username, password, done) {
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
}

*/

/*
function initialize(passport) {
  const authenticateUser = (username, password, done) => {
    console.log(username, password);
    pool.query( "SELECT * FROM customers WHERE username = $1", [username],
    //pool.query(auth_query.getCustomerEmail),
    (err, results) => {
      if (err) {
        throw err;
      }
      

      console.log(results.rows);

      if ( results.rows.lengths > 0) {
        const user = results.rows[0];

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if(err){
            throw err;
            console.log(err);
          }

          if (isMatch){
            return done(null, user, {message: "successful login"});
          } else{
            return done(null, false, {message: "Password is not correct"});
          }
        });
      } else{
        return done(null, false, {message: "email not registered"});

        
      }
    });
  };

  passport.use('local', new LocalStrategy({
    usernameField: "customer_email",
    passwordField: "password"
  }, authenticateUser)
);

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    pool.query("SELECT * FROM customers WHERE id = $1", [id], (err, results) => {
      if (err){
        return done(err);
      }
      return done(null, results.rows[0]);
    });
  })
}

module.exports = {
  initialize,
}

*/


























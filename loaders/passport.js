
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const pool = require('../index');
const bcrypt = require('bcrypt');
const { getUser } = require('../services/userService');




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
  
  passport.serializeUser((user, done) => done(null, user.id));
  
  passport.deserializeUser((user, done) => {
      done(null, user)
  })
}






















/*
function initialize(passport) {
  const authenticateUser = (username, password, done) => {
    console.log(username, password);
    pool.query( "SELECT customers.customer_email, customers.password FROM customers WHERE customer_email = $1", [username],
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

  passport.use(new LocalStrategy({
    usernameField: "customer_email",
    passwordField: "password"
  }, authenticateUser
  )
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



























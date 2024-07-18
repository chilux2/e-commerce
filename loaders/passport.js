/*const LocalStrategy = require("passport-local").Strategy;
const { pool } = require("../index");
const bcrypt = require("bcrypt");

function initialize(passport) {
  console.log("Initialized");

  const authenticateUser = (customer_email, password, done) => {
    console.log(customer_email, password);
    pool.query(
      `SELECT * FROM customers WHERE customer_email = $1`,
      [customer_email],
      (err, results) => {
        if (err) {
          throw err;
        }
        console.log(results.rows);

        if (results.rows.length > 0) {
          const user = results.rows[0];

          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
              console.log(err);
            }
            if (isMatch) {
              return done(null, user);
            } else {
              //password is incorrect
              return done(null, false, { message: "Password is incorrect" });
            }
          });
        } else {
          // No user
          return done(null, false, {
            message: "No user with that email address"
          });
        }
      }
    );
  };

  passport.use(
    new LocalStrategy(
      { usernameField: "customer_email", passwordField: "password" },
      authenticateUser
    )
  );
  // Stores user details inside session. serializeUser determines which data of the user
  // object should be stored in the session. The result of the serializeUser method is attached
  // to the session as req.session.passport.user = {}. Here for instance, it would be (as we provide
  //   the user id as the key) req.session.passport.user = {id: 'xyz'}
  passport.serializeUser((user, done) => done(null, user.id));

  // In deserializeUser that key is matched with the in memory array / database or any data resource.
  // The fetched object is attached to the request object as req.user

  passport.deserializeUser((id, done) => {
    pool.query(`SELECT * FROM customers WHERE id = $1`, [id], (err, results) => {
      if (err) {
        return done(err);
      }
      console.log(`ID is ${results.rows[0].id}`);
      return done(null, results.rows[0]);
    });
  });
}

module.exports = initialize;

*/


/*const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');

const { pool } = require("../index")

function initialize(passport, getCustomerEmail, getCustomerById) {
  const authenticateUser = async (email, password, done) => {
   /* const user = getCustomerEmail(email)
    if (user == null) {
      return done(null, false, { message: 'No user with that email' })
    } 

    pool.query("SELECT * FROM customers WHERE customer_email = $1"), [email], 
    (err, results) => {
      if (err) {
        throw err;
      }
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, getCustomerById(id))
  })
}

module.exports = initialize */




//

const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
//const LocalStrategy = require('passport-local');
const pool = require('../index');
const bcrypt = require('bcrypt');
//const { getUser } = require('../services/userService');

/*const AuthService = require('../services/AuthService');
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

}

*/






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




























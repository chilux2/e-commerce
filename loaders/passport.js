
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const pool = require('../index');
const bcrypt = require('bcrypt');
const auth_query = require('../controllers/auth_controller')
//const { getCustomerById } = require('../database/customer_query');
//const { getCustomerEmail } = require('../database/customer_query');
//const { getCartById } = require("../database/cart_query");


//const services = require('../controllers/auth_controller');
//const { getCartById } = require("../database/cart_query");


/*
function initialize(passport, getCustomerEmail, getCustomerById) {
  const authenticateUser = async (email, password, done) => {
    const user = await getCustomerEmail(email);
    if (user.length == 0) {
      return done(null, false, { message: 'No user with that email' });
    }
    try {
      if (await bcrypt.compare(password, user[0].user_password)) {
        return done(null, user[0]);
      } else {
        return done(null, false, { message: 'Password incorrect' });
      }
    } catch (e) {
      return done(e);
    }
  };
  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));

  passport.serializeUser((user, done) => done(null, user.user_id));

  passport.deserializeUser(async (id, done) => {
    const user = await getCustomerById(id);
    return done(null, user[0]);
  });
}

module.exports = {
  initialize,
}; */

//possilby try and connect auth controller to get access to customer email 



function initialize(passport) {
  const authenticateUser = (customer_email, password, done) => {
    console.log(customer_email, password);
    pool.query( "SELECT customers.customer_email, customers.password FROM customers WHERE customer_email = $1", [customer_email],
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
            return done(null, user);
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































/*
function initialize(passport) {

console.log('passport time');

const authenticateUser = (email, password, done) => {

  const { customer_email } = req.body;

  pool.query(auth_query.getCustomerEmail), [customer_email], (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      const user = results.rows[0];

      bcrypt.compare(password, user.password, (err, aMatch) => {
        if (err) {
          console.log(err);
        }

        if(aMatch) {
          return done(null,user);
        } else {
          return done(null, false, { message: "incorrect password"});
        }
      });
    } else {
      return done(null, false, {
        message: " email address does not match"
      });
    }
  }
};  



  passport.use(new LocalStrategy(
  { usernameField: "email", passwordField: "password" },
  authenticateUser
     )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
});

passport.serializeUser((user, done) => done(null, user.user_id));

passport.deserializeUser((id, done) => {
  pool.query(getCartById, [id], (err, results) => {
    if (err) {
      return done(err);
    }
    console.log(results.rows[0]);
    return done(null, results.rows[0]);
  });
});
 
  }

module.exports = {
 initialize,
}


*/

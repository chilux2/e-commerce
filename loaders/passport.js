
//const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const pool = require('../index');
const bcrypt = require('bcrypt');

//const services = require('../controllers/auth_controller');
//const { getCartById } = require("../database/cart_query");


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
module.exports = initialize;




/*
function initialize(passport) {
const verifyCallback = (customer_email , password, done ) => {

  pool.query(query.getCustomerEmail, [ customer_email ], ( err, results) => {

  if(err) {
      throw err;
    }

    console.log(results.rows);

    if(results.rows.length > 0){
      const user = results.rows[0];
    }
    
   /* if(!username) {
      res.status(401).send('Incorrect username or password');
                  };
  
  if(username.password !== password) {
      res.status(401).send('Incorrect username or password');
  };

  res.status(201).send('Login successful');
  
  });


passport.use(
  new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password"
    },
    verifyCallback

  )

);


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  pool.query(query.getCustomerById, [id], (error, results) => {
      if (error) throw error; 
      const customer = results.rows[0];
      return done(null, customer);
  });
});

}
}

module.exports = {
  initialize,
}

*/



 /*const passportLoad = (passport) => {
    const authUser = async (customer_email, password, done) => {
      try {
        // Checking if user with the given email exists
        const findUser = await pool.query(query.getCustomerEmail, [customer_email]);
        const user = findUser.rows[0];
  
        if (!user) {
          return done(null, false, { message: "User Not Found!" });
        }
  
        // Compare provided password with the hashed password in db
       // const matched = await bcrypt.compare(password, user.password);
  
        if (!matched) {
          return done(null, false, { message: "Password Incorrect!" });
        } else {
          return done(null, user);
        }
      } catch (err) {
        return done(err);
      }
    }; 
  
    passport.use(
      new LocalStrategy(
        { usernameField: "email", passwordField: "password" },
        authUser
      )
    );
  
    // Store user id in session
    passport.serializeUser(async (user, done) => {
      // Add the cart_id property to req.user on login
      const cart = await pool.query(getCartById, [username.customer_id]);
      const cart_id = cart.rows[0].cart_id;
      user.cart_id = id;
  
      done(null, username.customer_id);
    });
  
    // Fetch user data from session
    passport.deserializeUser(async (id, done) => {
      try {
        // Fetching user data of the stored id from session
        const findUser = await pool.query(query.getCustomerById, [id]);
        const user = findUser.rows[0];
  
        // If the already logged in user gets deleted by the admin, it won't exist in the db
        // So deserialize it out of the session to handle the "failed to deserialize user out of session" error
        if (!user) {
          return done(null, false);
        } else {
          // Add the cart_id property to req.user
          const cart = await pool.query(getCartById, [user.customer_id]);
          const cart_id = cart.rows[0].cart_id;
          user.cart_id = cart_id;
  
          return done(null, user);
        }
      } catch (err) {
        return done(err);
      }
    });
  };
  
  module.exports = {
    passportLoad,
};

*/


/*

const passportLoad = (passport) => {
    const auth_user = (username, password, done) => {
        pool.query(services.getCustomerEmail), [username], async (error, results) => {
            if(error) return done (error);
            if(results.rows.length > 0) {
                const customer = results.rows[0];
                if(username.password != password) return done(null, false);
                return done(null, customer)
            } else {
                return done(null , false);
            }
        }
        res.status(201).send('Login successful');

    };

    passport.use(new LocalStrategy(auth_user));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    pool.query(query.getCustomerById, [id], (error, results) => {
        if (error) throw error; 
        const customer = results.rows[0];
        return done(null, customer);
    });
});






}

module.exports = {
    passportLoad,
} */

/*
passport.use(new LocalStrategy ( function (username, password, done) {
        pool.query((auth_query.getCustomerEmail), [username], async (err,results) => {
    // If there's an error in db lookup, 
      // return err callback function
      if(err) return done(err);
 
      // If user not found, 
      // return null and false in callback
      if(!username) return done(null, false);
 
      // If user found, but password not valid, 
      // return err and false in callback
      if(username.password != password) return done(null, false);
 
      // If user found and password valid, 
      // return the user object in callback
      return done(null, username);
        });
    })); */





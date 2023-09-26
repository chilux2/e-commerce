
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const pool = require('../index');
const customer_query = require('../controllers/customer_controller');
const auth_query = require('../controllers/auth_controller');

module.exports = (app) => {

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null,user.id);
});

passport.deserializeUser((id, done) => {
    pool.query(customer_query.getCustomerById, [id], (err, results) => {
        if (err) throw err; 
        const user = results.rows[0];
        return done(null, user);
    });
});


passport.use(new LocalStrategy(auth_query.getCustomerEmail));

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
}




const passport = require("passport");
const LocalStrategy = require("passport-local");
const DB = require('./index');

module.exports = (app) => {

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null,user.id);
});

passport.deserializeUser((id, done) => {
    DB.customers.findById(id, function (err, user) {
        if (err) return done(err);
        done(null, user);
    });
});


passport.use(new LocalStrategy (
    function (username, password, done){
        DB.customers.findByUsername(username, (err,customers) => {
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
      return done(null, user)
        })
    }
));

}
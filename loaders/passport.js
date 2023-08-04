const passport = require("passport");
const LocalStrategy = require("passport-local");

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy (
    function (username, password, done){
        db.customers
    }
));
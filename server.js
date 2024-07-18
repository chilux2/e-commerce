
/*const express = require("express");
const { pool } = require("./index");
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
//require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3000;

const initializePassport = require("./loaders/passport");

initializePassport(passport);

// Middleware

// Parses details from a form
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use(
  session({
    // Key we want to keep secret which will encrypt all of our information
    secret: process.env.SESSION_SECRET,
    // Should we resave our session variables if nothing has changes which we dont
    resave: false,
    // Save empty value if there is no vaue which we do not want to do
    saveUninitialized: false
  })
);
// Funtion inside passport which initializes passport
app.use(passport.initialize());
// Store our variables to be persisted across the whole session. Works with app.use(Session) above
app.use(passport.session());
app.use(flash());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/customers/register", checkAuthenticated, (req, res) => {
  res.render("register.ejs");
});

app.get("/customers/login", checkAuthenticated, (req, res) => {
  // flash sets a messages variable. passport sets the error message
  //console.log(req.session.flash.error);
  res.render("login.ejs");
});

app.get("/customers/dashboard", checkNotAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  res.render("dashboard", { user: req.user.name });
});

app.get("/customers/logout", (req, res) => {
  req.logout();
  res.render("index", { message: "You have logged out successfully" });
});

app.post("/customers/register", async (req, res) => {
  let { name, email, password, password2 } = req.body;

  let errors = [];

  console.log({
    name,
    email,
    password,
    password2
  });

  if (!name || !email || !password || !password2) {
    errors.push({ message: "Please enter all fields" });
  }

  if (password.length < 6) {
    errors.push({ message: "Password must be a least 6 characters long" });
  }

  if (password !== password2) {
    errors.push({ message: "Passwords do not match" });
  }

  if (errors.length > 0) {
    res.render("register", { errors, name, email, password, password2 });
  } else {
    hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    // Validation passed
    pool.query(
      `SELECT * FROM customers
        WHERE customer_email = $1`,
      [email],
      (err, results) => {
        if (err) {
          console.log(err);
        }
        console.log(results.rows);

        if (results.rows.length > 0) {
          return res.render("register", {
            message: "Email already registered"
          });
        } else {
          pool.query(
            `INSERT INTO customers (first_name, last_name, customer_email, password, username) VALUES ($1, $2, $3, $4, $5) RETURNING * `,
            [name, email, hashedPassword],
            (err, results) => {
              if (err) {
                throw err;
              }
              console.log(results.rows);
              req.flash("success_msg", "You are now registered. Please log in");
              res.redirect("/customers/login");
            }
          );
        }
      }
    );
  }
});

app.post(
  "/customers/login",
  passport.authenticate("local", {
    successRedirect: "/customers/dashboard",
    failureRedirect: "/customers/login",
    failureFlash: true
  })
);

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/customers/dashboard");
  }
  next();

















  
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/customers/login");
}




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



*/






/*if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
//const methodOverride = require('method-override')

const initializePassport = require('./loaders/passport')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
//app.use(methodOverride('_method'))

app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs', { name: req.user.name })
})

app.get('/customers/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
})

app.post('/customers/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/customers/index',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('customers/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
})

app.post('customers/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
})

app.get('/customers/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/customers/dashboard")
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

app.listen(3000)

*/


















































const express = require('express');
const session = require('express-session');
const { SESSION_SECRET } = require('./config');
const bodyParser = require('body-parser')
const app = express();
 //require("dotenv").config();
const passport = require('passport');
require('./loaders/passport');
//const LocalStrategy = require("passport-local").Strategy;
const loaders = require('./loaders');


//console.log(process.env)

// loaders = require('./loaders/express');

const { PORT } = require('./config');

//const PORT = 8000;

//async function startServer() {

//loaders(app);

//passportLoader(app);





app.use(
  session({  
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60
    } 
  })
); 
 

//const port = process.env.PORT || 8000;

/*const passportLoader = require('./loaders/passport');
const expressLoader = require( './loaders/express');

passportLoader(app);
expressLoader(app);*/



/*passport.serializeUser((user, done) => {
  console.log(` serialize user: ${JSON.stringify(user)}`);
  return done(null, user.id);
});


passport.use('local', new LocalStrategy({ passReqToCallback: true },
  (req, username, password, done) => {

  }));  */


//initialize(passport);
app.use(passport.initialize());
app.use(passport.session());
//initialize(passport);

/*app.get('/', (req, res) => {
  res.send('Hello World it is i chilu!')
}); */

//connor bailey tutorial - minute 21.37

/*

app.set("view engine", "ejs");

app.get("/",  (req,res) => {
  res.render("index");
}); //connor bailey - 31.01

app.get('/customers/register', (req, res) => {
  res.render("register");
});

app.get('/customers/login', (req, res) => {
  res.render("login");
});


app.get('/customers/dashboard', (req, res) => {
  res.render("dashboard", {user: "Chilu"});
});
*/


const Authrouter = require('./routes/auth');
app.use('/auth', Authrouter);

const customerRouter = require('./routes/customers');
app.use('/customers', customerRouter);

const cartRouter = require('./routes/cart');
app.use('/cart', cartRouter); 

const ordersRouter = require('./routes/orders');
app.use('/orders', ordersRouter);

const productRouter = require('./routes/product');
app.use('/product', productRouter);




//dont forget to import all the routes into the server.js!!!!!!

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})



//startServer();


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
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
app.use(methodOverride('_method'))

app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
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

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
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


















































/*
const express = require('express');
//const session = require('express-session');
//const { SESSION_SECRET } = require('./config');
//const bodyParser = require('body-parser')
const app = express();
 //require("dotenv").config();
//const passport = require('passport');
//const  passportLoader = require('./loaders/passport');
//const LocalStrategy = require("passport-local").Strategy;
const loaders = require('./loaders');


//console.log(process.env)

// loaders = require('./loaders/express');

const { PORT } = require('./config');

//const PORT = 8000;

async function startServer() {

loaders(app);

//passportLoader(app)




/*
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
); */
 

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
//app.use(passport.initialize());
//app.use(passport.session());
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

/*
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

*/


//dont forget to import all the routes into the server.js!!!!!!
/*
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})

}

startServer();

*/

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passportLoader = require('./loaders/passport');
const expressLoader = require('./loaders/express');
const passport = require('passport');
const { SESSION_SECRET } = require('./config');



const app = express();
const PORT = process.env.PORT || 8000;


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

passportLoader(app);
expressLoader(app);

app.set('view-engine', 'ejs');

app.use(cors());
//.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);




app.use(passport.initialize()); 
app.use(passport.session()); 


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



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})

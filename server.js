const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const passport = require('passport');
const { initialize } = require('./loaders/passport');



const loaders = require('./loaders/express');

const { PORT } = require('./config');

app.use(express.json());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
 

//const port = process.env.PORT || 8000;

/*const passportLoader = require('./loaders/passport');
const expressLoader = require( './loaders/express');

passportLoader(app);
expressLoader(app);*/

loaders(app);

//initialize(passport);
app.use(passport.initialize());
app.use(passport.session());
initialize(passport);

app.get('/', (req, res) => {
  res.send('Hello World it is i chilu!')
})


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
  console.log(`Example app listening on port ${PORT}`)
})




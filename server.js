
require('dotenv').config();
const express = require('express');
const app = express();
const expressLoader = require('./loaders/express');
const passportLoader = require('./loaders/passport');
const passport = require('passport');
const authRouter = require('./routes/auth')
const productsRouter = require('./routes/product');
const userRouter = require('./routes/user');
const cartRouter = require('./routes/cart');
const ordersRouter = require('./routes/order');

const PORT = process.env.PORT || 8000;

expressLoader(app);

passportLoader(app);

authRouter(app, passport);

productsRouter(app);

userRouter(app);

cartRouter(app);

ordersRouter(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



/*const express = require('express');
const app = express();

const loaders = require('./loaders');

const { PORT } = require('./config');

async function startServer() {

  // Init application loaders
  loaders(app);

  // Start server
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  })
}
//finish copying app.js
startServer(); */
const express = require('express');
const app = express();
//const { DB } = require('./config');
const dotenv = require('dotenv').config();

const port = process.env.DB_PORT || 8000;

/*const passportLoader = require('./loaders/passport');
const expressLoader = require( './loaders/express');

passportLoader(app);
expressLoader(app);*/

app.get('/', (req, res) => {
  res.send('Hello World it is i chilu!')
})

const customerRouter = require('./routes/customers');
app.use('/customers', customerRouter);

const cartRouter = require('./routes/cart');
app.use('/cart', cartRouter);

const ordersRouter = require('./routes/orders');
app.use('/orders', ordersRouter);

const productRouter = require('./routes/product');
app.use('/product', productRouter);



//app.get('/customers', DB.DB_DATABASE);

//dont forget to import all the routes into the server.js!!!!!!


/*const productRouter = require('./product.js');
app.use('/products', productRouter); */



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




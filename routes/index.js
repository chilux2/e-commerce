const authRouter = require('./auth');
const cartRouter = require('./cart');
const ordersRouter = require('./orders');
const productRouter = require('./product');
const customerRouter = require('./customers');
//passport = require('../loaders/passport');

module.exports = (app, passport) => {
    authRouter(app, passport);
    cartRouter(app);
    ordersRouter(app);
    productRouter(app);
    customerRouter(app);
}
const Authrouter = require('./auth');
const cartRouter = require('./cart');
const ordersRouter = require('./cart');
const productRouter = require('./product');
const customerRouter = require('./customers');
// passport = require('../loaders/passport');

module.exports = (app, passport) => {
    Authrouter(app.passport);
    cartRouter(app);
    ordersRouter(app);
    productRouter(app);
    customerRouter(app);
}
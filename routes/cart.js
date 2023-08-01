const express = require('express');
const cartRouter = express.Router();

app.use('/', cartRouter);

cartRouter.post('/cart', async (req, res, next) => {
    try {
        res.status(200).send(response);
    } catch(err) {
        next(err);
    }
});

cartRouter.post('/cart/{cartId}', async (req, res, next) => {
    try {
        res.status(200).send(response);
    } catch(err) {
        next(err);
    }
});

cartRouter.get('/cart/{cartId}', async (req, res, next) => {
    try {
        res.status(200).send(response);
    } catch(err) {
        next(err);
    }
});

module.exports = cartRouter;
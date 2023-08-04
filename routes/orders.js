const express = require('express');
const ordersRouter = express.Router();

app.use('/customers', ordersRouter);

ordersRouter.get('/orders', async (req, res, next) => {
    try {
        res.status(200).send(response);
    } catch(err) {
        next(err);
    }
});

ordersRouter.get('/orders/{orderId}', async (req, res, next) => {
    try {
        res.status(200).send(response);
    } catch(err) {
        next(err);
    }
});



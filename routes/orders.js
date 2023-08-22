const express = require('express');
const ordersRouter = express.Router();

ordersRouter.get('/', async (req, res, next) => {
    try {
        res.status(200).send();
    } catch(err) {
        next(err);
    }
});

ordersRouter.get('/:id', async (req, res, next) => {
    try {
        res.status(200).send();
    } catch(err) {
        next(err);
    }
});

module.exports = ordersRouter;


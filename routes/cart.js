const express = require('express');
const cartRouter = express.Router();

cartRouter.get('/id', async (req, res, next) => {
    try {
        res.status(200).send();
    } catch(err) {
        next(err);
    }
});

cartRouter.put('/id', async (req, res, next) => {
    try {
        res.status(200).send();
    } catch(err) {
        next(err);
    }
});


cartRouter.post('/', async (req, res, next) => {
    try {
        res.status(201).send();
    } catch(err) {
        next(err);
    }
});

cartRouter.delete('/id', async (req, res, next) => {
    try {
        res.status(200).send();
    } catch(err) {
        next(err);
    }
});



module.exports = cartRouter;
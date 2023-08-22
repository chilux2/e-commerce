const express = require('express');
const productRouter = express.Router();

productRouter.get('/', async (req, res, next) => {
    try {
        res.status(200).send();
    } catch(err){
        next(err);
    }
});

productRouter.get('/id', async (req,res, next) => {
    try {
        res.status(200).send();
    } catch(err) {
        next(err);
    }
});

module.exports = productRouter;
const express = require('express');
const productRouter = express.Router();



productRouter.get('/products', async (req, res, next) => {
    try {
        res.status(200).send(response);
    } catch(err){
        next(err);
    }
});

productRouter.get('/products/{productId}', async (req,res, next) => {
    try {
        res.status(200).send(response);
    } catch(err) {
        next(err);
    }
})

module.exports = productRouter;
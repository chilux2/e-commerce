const express = require('express');
const productRouter = express.Router();



productRouter.get('/', async (req, res, next) => {
    try {
        res.status(200).send(response);
    } catch(err){
        next(err);
    }
});

productRouter.get('/:productId', async (req,res, next) => {
    try {
        res.status(200).send(response);
    } catch(err) {
        next(err);
    }
})

module.exports = productRouter;
const express = require('express');
const customerRouter = express.Router();

app.use('/customers', customerRouter);

customerRouter.get('/:customerId', async (req, res, next) => {
 try{
    res.status(200).send(response);
 } catch(err) {
    next(err)
 }
});

customerRouter.put('/:customerId', async (req, res, next) => {
    try{
        res.status(200).send(response);
    } catch(err) {
        next(err)
    }
});

module.exports = customerRouter;
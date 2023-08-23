const express = require('express');
const customerRouter = express.Router();

//app.use('/customers', customerRouter);

customerRouter.get('/', async (req, res, next) => {
  try{
      
       res.status(200).send();
      
    } catch(err) {
       next(err)
    }
   });

   customerRouter.get('/id', async (req, res, next) => {
    try{
       res.status(200).send();
    } catch(err) {
       next(err)
    }
   });

customerRouter.put('/id', async (req, res, next) => {
    try{
        res.status(200).send();
    } catch(err) {
        next(err)
    }
});

module.exports = customerRouter;
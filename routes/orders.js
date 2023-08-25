const express = require('express');
const ordersRouter = express.Router();
const pool = require('../index')

ordersRouter.get('/', async (req, res, next) => {
    try{
        pool.query('SELECT * FROM orders ORDER BY id ASC', (error, results) => {
           if (error) {
             throw error
           }
           res.status(200).json(results.rows)
         })
     
            //res.status(200).send();
           
         } catch(err) {
            next(err)
         }
});

ordersRouter.get('/:id', async (req, res, next) => {
    try{  
        pool.query('SELECT * FROM orders ORDER BY id ASC', (error, results) => {
           if (error) {
             throw error
           }
           res.status(200).json(results.rows)
         })
     
            //res.status(200).send();
           
         } catch(err) {
            next(err)
         }
});

module.exports = ordersRouter;


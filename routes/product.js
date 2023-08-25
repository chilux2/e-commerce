const express = require('express');
const productRouter = express.Router();
const pool = require('../index')

productRouter.get('/', async (req, res, next) => {
    try{
        pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
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

productRouter.get('/id', async (req,res, next) => {
    try{
        pool.query('SELECT * FROM products ORDER BY id DESC', (error, results) => {
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

module.exports = productRouter;
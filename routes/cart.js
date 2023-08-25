const express = require('express');
const cartRouter = express.Router();
const pool = require('../index')

cartRouter.get('/id', async (req, res, next) => {
    try{
        pool.query('SELECT * FROM cart ORDER BY id ASC', (error, results) => {
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

cartRouter.put('/id', async (req, res, next) => {
    try{
        pool.query('SELECT * FROM customers ORDER BY id ASC', (error, results) => {
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


cartRouter.post('/id', async (req, res, next) => {

   const id = parseInt(req.params.id)
  const { customer_id } = req.body
    try{
       pool.query('INSERT INTO cart (customer_id) VALUES ($1)',[customer_id, id], (error, results) => {
           if (error) {
             throw error
           }
           res.status(201).send('Cart successfully created')
         })
     
            //res.status(200).send();
           
         } catch(err) {
            next(err)
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
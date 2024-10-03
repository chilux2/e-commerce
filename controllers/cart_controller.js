const pool = require('../index');
const cart_query = require('../database/cart_query');

//pool.connect();

const createCart = (req, res) => {
    
    const {product_id, order_id, customer_id} = req.body;

    pool.query(cart_query.createCart, [product_id, order_id, customer_id] , (error, results) => {
       if (error) { throw error }
       
       res.status(201).json(`Cart created successfully with ID: ${results.rows[0].id}`);
    });
 };

 const getCartById = (req,res) => {
   const id = parseInt(req.params.id);

   pool.query(cart_query.getCartById, [id], (error,results) => {
      if(error) {
         throw error
      }
      res.status(200).json(results.rows);
   })
 }

 const deleteCart = (req,res) => {
   const id = parseInt(req.params.id);

   pool.query(cart_query.deleteCart, [id], (error,results) => {
      if(error) {
         throw error
      }
      res.status(200).send(`Cart deleted with ID: ${id}`);
   })
 }

 const checkout = (req, res) => {
   const customer_id = req.params.customer_id;
   //const id = req.body.id;
   pool.query(getCartById, [customer_id], (error,results) => {
      if(error){throw error}
      if(results.rows.length === 0) {
         res.status(400).send('nothing in cart');
      } else {
          res.status(200).send('check out completed');
      }
   })
 }

 
 module.exports = {

    createCart,
    getCartById,
    deleteCart,
    checkout,
 };
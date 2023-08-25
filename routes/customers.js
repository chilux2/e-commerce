const express = require('express');
const customerRouter = express.Router();
const pool = require('../index');


//app.use('/customers', customerRouter);




customerRouter.get('/', async (req, res, next) => {
  try{
   pool.query('SELECT * FROM customers ORDER BY id DESC', (error, results) => {
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



   customerRouter.get('/:id', async (req, res, next) => {
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

customerRouter.put('/id', async (req, res, next) => {
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

/*customerRouter.put('/id', async (request, response, next) => {
   
   const id = parseInt(request.params.id)
  const { first_name, customer_email } = request.body

  pool.query(
    'UPDATE customers SET first_name = $1, customer_email = $2 WHERE id = $3',
    [first_name, customer_email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
});*/
   



module.exports = customerRouter;
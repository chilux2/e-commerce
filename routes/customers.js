const express = require('express');
const customerRouter = express.Router();
const customer_controller = require('../controllers/customer_controller');

module.exports = (app) => {

app.use('/customers', customerRouter);

customerRouter.get('/:id', customer_controller.getCustomerById);
//gets a single customer by there id 

customerRouter.get('/', customer_controller.getAllCustomers);
//gets all customers 

customerRouter.put('/:id', customer_controller.updateCustomer);
//updates the customer 

}

//module.exports = customerRouter;
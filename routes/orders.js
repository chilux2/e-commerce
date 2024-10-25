const express = require('express');
const ordersRouter = express.Router();

const orders_controller = require('../controllers/orders_controller');

ordersRouter.get('/', orders_controller.getAllOrders);
ordersRouter.get('/:id', orders_controller.getOrdersById);
ordersRouter.post('/', orders_controller.createOrder);

//}

module.exports = ordersRouter;


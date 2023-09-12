const express = require('express');
const cartRouter = express.Router();
const cart_controller = require('../controllers/cart_controller');

cartRouter.post('/', cart_controller.createCart);
cartRouter.get('/:id', cart_controller.getCartById);
cartRouter.delete('/:id', cart_controller.deleteCart);



module.exports = cartRouter;
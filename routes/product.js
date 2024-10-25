const express = require('express');
const productRouter = express.Router();
const product_controller = require('../controllers/product_controller');

productRouter.get('/:id', product_controller.getProductById);

productRouter.get('/', product_controller.getAllProducts);



module.exports = productRouter;
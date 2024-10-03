const express = require('express');
const productRouter = express.Router();
const product_controller = require('../controllers/product_controller');

module.exports = (app) => {

app.use('/product', productRouter);

productRouter.get('/:id', product_controller.getProductById);

productRouter.get('/', product_controller.getAllProducts);


}
//module.exports = productRouter;
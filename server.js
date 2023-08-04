const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

const loaders = require('./loaders');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//dont forget to import all the routes into the server.js!!!!!!
loaders(app);

/*const productRouter = require('./product.js');
app.use('/products', productRouter); */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

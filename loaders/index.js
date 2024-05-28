const expressLoad = require('./express');
//const passportLoad = require('./passport');
const routeLoad = require('../routes');

module.exports = async (app) => {


    const expressApp = await expressLoad(app);

    //const passport =  await passportLoad(expressApp);

    //await routeLoad(app, passport);

     // Error Handler
  app.use((err, req, res, next) => {

    const { message, status } = err;
  
    return res.status(status).send({ message });
  });
  
}
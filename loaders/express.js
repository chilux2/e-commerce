const session = require('express-session');
//const { SESSION_SECRET } = require('../config');
require("dotenv").config();

module.exports = (app) => {

app.use(
    session({  
      secret: process.env.SESSION_SECRET || 'session_secret',
      resave: false,
      saveUninitialized: false,
     /* cookie: {
        secure: false,
        maxAge: 24 * 60 * 60
      } */
    })
  );
    return app;
    
}
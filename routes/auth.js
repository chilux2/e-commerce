const express = require('express');
const Authrouter = express.Router();
const passport = require("passport");
const auth_controller = require('../controllers/auth_controller');
//const passportLoader = require('../loaders/passport');
const pool = require('../index');

module.exports = (app, passport) => {

    app.use('/auth', Authrouter);

    Authrouter.post('auth/register', auth_controller.registerUser); 

    Authrouter.get("auth/login", auth_controller.getCustomerEmail);
    


    Authrouter.post('/login', passport.authenticate('local', { failureMessage: true }), (req, res) => {
      res.send(`Logged in as ${req.body.username}`);
  })
  
}

//module.exports = Authrouter;
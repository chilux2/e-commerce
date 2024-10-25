
const express = require('express');
const Authrouter = express.Router();
const passport = require("passport");
const auth_controller = require('../controllers/auth_controller');
const pool = require('../index');



    

    Authrouter.post('/register', auth_controller.registerUser); 

    

    Authrouter.post('/login', passport.authenticate('local', { failureMessage: true }), (req, res) => {
      res.send(`Logged in as ${req.body.username}`);
  })
  
//}*/

module.exports = Authrouter;
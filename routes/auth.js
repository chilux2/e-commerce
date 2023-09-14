const express = require('express');
const Authrouter = express.Router();
const auth_controller = require('../controllers/auth_controller');
//const session = require("express-session");


//const AuthService = require('../services/AuthService');
//const AuthServiceInstance = new AuthService();


    Authrouter.post('/', auth_controller.registerUser); 


    /*Authrouter.post('login', passport.authenticate('local'), async (req, res, next) => {
        try{

            const { username, password } = req.body;
            const response = await AuthServiceInstance.login({ email: username, password });

            res.status(200).send(response);
        } catch(err) {
            next(err);

        }
    }) */


module.exports = Authrouter;

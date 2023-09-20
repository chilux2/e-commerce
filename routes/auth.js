const express = require('express');
const Authrouter = express.Router();
const passport = require("passport");
const auth_controller = require('../controllers/auth_controller');
//const session = require("express-session");


//const AuthService = require('../services/AuthService');
//const AuthServiceInstance = new AuthService();


    Authrouter.post('/register', auth_controller.registerUser); 


    Authrouter.post("/login", passport.authenticate("local"), (req, res) => {
        const user = req.user;
        console.log(user);
        res.json({message: `${user.first_name} is logged in`});
    });

       /* Authrouter.post('/login', auth_controller.getCustomerEmail, passport.authenticate('local', {failureRedirect: '/login'}), (req, res,) => {

            res.redirect('logged in ' + req.user.username);
     
             /*const username = req.username;
             console.log(username);
             res.json({message: `${username.first_name} is logged in`});
             
             });
        */



    Authrouter.get("/profile",  (req,res) => {
        res.render("profile", {username: req.username });
    });

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

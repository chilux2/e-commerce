const express = require('express');
const Authrouter = express.Router();
const passport = require("passport");
const auth_controller = require('../controllers/auth_controller');
//const passport = require('../loaders/passport');
//const session = require("express-session");


//const AuthService = require('../services/AuthService');
//const AuthServiceInstance = new AuthService();


    Authrouter.post('/register', auth_controller.registerUser); 

    Authrouter.get("/login", (req, res) => {
        res.render("login");
    })


    Authrouter.post("/login", passport.authenticate("local")); 

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

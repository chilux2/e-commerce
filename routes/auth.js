const express = require('express');
const Authrouter = express.Router();
const passport = require("passport");
const auth_controller = require('../controllers/auth_controller');
const passportLoader = require('../loaders/passport');
//const session = require("express-session");
//const auth_user = require('../loaders/passport');


//const AuthService = require('../services/AuthService');
//const AuthServiceInstance = new AuthService();


    Authrouter.post('/register', auth_controller.registerUser); 

    Authrouter.get("/login", auth_controller.getCustomerEmail);


    Authrouter.post('/login', passport.authenticate('local', { failureMessage: true }), (req, res) => {
        res.send(`Logged in as ${req.body.username}`);
    })



/*
    Authrouter.post('/customers/login', passport.authenticate('local'), (req, res) => {
        const user = req.user;
        console.log(user);
         res.json({message: `${user.first_name} is logged in`});
      }); */

    /*Authrouter.post('/customers/login', 
    passport.authenticate('local', { failureRedirect: '/login', failureMessage: true}),
    function(req, res) {
        res.redirect('/~' + req.user.username);
    })

    
*/
 
/*
   Authrouter.post('auth/customers/login',
    passport.authenticate("local", {
        successRedirect: "/customers/dashboard",
        failureRedirect: "/customers/login",
        failureFlash: true
    }));
*/

   /*Authrouter.post('/login',
         passport.authenticate("local"));  */

         
          //Authrouter.post('/login', passport.authenticate("local")); 
         // Authrouter.post('/login', auth_controller.getCustomerEmail);
            //successReturnToOrRedirect: '/',
          //  failureRedirect: '/login',
            //failureMessage: true
          
          
            /* Authrouter.post('/login', (req, res, next) => { 
                 passport.authenticate('local',function(err, user, info){
                     console.log(user);
                     res.sendStatus(200);
            })(req,res, next);
            });  */
        

       /* Authrouter.post('/login', auth_controller.getCustomerEmail, passport.authenticate('local', {failureRedirect: '/login'}), (req, res,) => {

            res.redirect('logged in ' + req.user.username);
     
             /*const username = req.username;
             console.log(username);
             res.json({message: `${username.first_name} is logged in`});
             
             });
        */




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

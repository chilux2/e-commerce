const express = require('express');
const Authrouter = express.Router();
const session = require("express-session");


const AuthService = require('../services/AuthService');
const AuthServiceInstance = new AuthService();

module.exports = (app, passport) => { 

    app.use('/auth', Authrouter);

    Authrouter.post("/register", async (req, res, next) => {
        try{
            const data = req.body;

            const response = await AuthServiceInstance.register(data);
            res.status(200).send(response);
        } catch(err) {
            next(err);
        }
    }); 


    Authrouter.post('login', passport.authenticate('local'), async (req, res, next) => {
        try{

            const { username, password } = req.body;
            const response = await AuthServiceInstance.login({ email: username, password });

            res.status(200).send(response);
        } catch(err) {
            next(err);

        }
    })



}
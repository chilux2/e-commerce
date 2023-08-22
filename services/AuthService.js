const session = require("express-session");
const express = require('express');

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
})

app.get("/login", (req, res) => {
    res.render("login");
  });

app.get("/profile", (req,res) => {
    res.render("profile", {user: req.user});
})

app.post("/register", async (req,res) => {
    const { username, password } = req.body;

    const newUser = await db.customers.createUser({ username, password });

    if(newUser) {
        res.status(201).json({
            msg: " Account creation success",
            newUser
        });
    } else {
        res.status(500).json({msg: "Account creation failure"});
    }
});


app.post(
    "/login",passport.authenticate("local", {failureRedirect : "/login"}), 
       (req,res) => {
        res.redirect("profile");
       } 
    );

    module.exports = AuthService;

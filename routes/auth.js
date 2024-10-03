const express = require('express');
const router = express.Router();

const { isLoggedIn, passwordHash } = require('../services/AuthService');
// Instantiate Services
//const AuthService = require('../services/AuthService');
//const AuthServiceInstance = new AuthService();
const { getUser } = require('../services/UserService');

const db = require('../index');

module.exports = (app, passport) => {

  //app.use('/auth', router);
  app.use(router);


  router.post('/register', async (req, res) => {
    const { email, username, password, first_name, last_name } = req.body;
    try {
        const userExists = await getUser(username)
        if(userExists) return res.status(409).send(`User "${username}" already exists`)

        const hashedPassword = await passwordHash(password.toString(), 10);
        const dbRes = await db.query(`INSERT INTO customers (first_name, last_name, customer_email, password, username) VALUES ($1, $2, $3, $4, $5) RETURNING * "`,
            [email, username, hashedPassword, first_name, last_name]);
        res.status(201).send(`Successfully registered ${dbRes.rows[0].user_name}`)
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal error');
    }
});

//fix router next 
router.get('/login', (req, res) => {
    if (!req.user) return res.status(404).send('not logged in')
    res.send(`Hello ${req.user.username}`)
});

router.post('/login', passport.authenticate('local', { failureMessage: true }), (req, res) => {
    res.send(`Logged in as ${req.body.username}`);
});

/*router.post('/logout', isLoggedIn, (req, res) => {
    req.logout(err => {
        if (err) return res.send(err)
        res.send(`Logged out successfully`)
    });
}); */





  /*// Registration Endpoint
  router.post('/register', async (req, res, next) => {
  
    try {
      const data = req.body;
      
      const response = await AuthServiceInstance.register(data);
      res.status(200).send(response);
    } catch(err) {
      next(err);
    }
  
  });
  
  // Login Endpoint
  router.post('/login', passport.authenticate('local'), async (req, res, next) => {
    try {
      const { username, password } = req.body;
    
      const response = await AuthServiceInstance.login({ email: username, password});
    
      res.status(200).send(response);
    } catch(err) {
      next(err);
    }
  }); */
}
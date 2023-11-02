const pool = require('../index');
const auth_query = require('../database/customer_query');
const passport = require("passport");


const registerUser = (req, res) => {
    const { first_name, last_name, customer_email, password, username } = req.body;

    pool.query(auth_query.getCustomerEmail, [customer_email], (error, results) => {
        if(error) throw error;
        if(results.rows.length) {
            res.status(400).send('Email already in use, please enter another one');
        } else {

            pool.query(auth_query.registerUser, [first_name, last_name, customer_email, password, username ], (error, results) => {
                if(error) {throw error}
        
                //res.status(201).json(`User successfully created with ID: ${results.rows[0]}`);
                //res.status(201).json(`User successfully created with ID: ${results.rows[0].customer_email}`);
                res.status(201).send('User created successfully');
            })
        }
    })

}

   /*const getCustomerEmail = (username, password, done) => {
        pool.query(auth_query.getCustomerEmail, [username], async (error, results) => {

            if(!username) {
                res.status(401).send('Incorrect username or password');
            };
            
            if(username.password !== password) {
                res.status(401).send('Incorrect username or password');
            };
    
            res.status(201).send('Login successful');
            done();
        });
    }*/ 

    
    const getCustomerEmail = (req, res) => {
        
        const { first_name, last_name, customer_email, password, username } = req.body;

        pool.query(auth_query.getCustomerEmail, [customer_email], (password,username) => {

            if(!username) {
                res.status(401).send('Incorrect username or password');
            };
            
            if(username.password !== password) {
                res.status(401).send('Incorrect username or password');
            };
    
            res.status(201).send('Login successful');
        })
    ;
    } 

//npm run devStart
 

module.exports = {
    registerUser,
    getCustomerEmail,
    
}
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
                res.status(201).send('User created successfully');
            })
        }
    })

}


module.exports = {
    registerUser,
    
    
}
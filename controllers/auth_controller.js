const pool = require('../index');
const auth_query = require('../database/customer_query');


const registerUser = (req, res) => {
    const { first_name, last_name, customer_email, password, username } = req.body;

    pool.query(auth_query.getCustomerEmail, [customer_email], async (error, results) => {
        if(error) throw error;
        if(results.rows.length) {
            res.status(400).send('Email already in use, please enter another one');
        } else {

            pool.query(auth_query.registerUser, [first_name, last_name, customer_email, password, username ], (error, results) => {
                if(error) {throw error}
        
                res.status(201).json(`User successfully created with ID: ${results.rows[0].ID}`);
            })
        }
    })

    
}

 

module.exports = {
    registerUser,
}
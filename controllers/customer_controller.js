

const pool = require('../index');
const customer_query = require('../database/customer_query');


const getCustomerById = (request, res) => {
    const id = parseInt(request.params.id);

    pool.query(customer_query.getCustomerById, [id], (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}; 

const getAllCustomers = (req, res) => {
    
    pool.query(customer_query.getAllCustomers, (error, results) => {
        if(error) {
            throw error
        }
        res.status(201).json(results.rows)
    } )
};

const updateCustomer = (req, res) => {
    const { first_name, last_name, customer_email, password } = req.body;
    const id = parseInt(req.params.id);
    pool.query(customer_query.updateCustomer, [first_name, last_name, customer_email, password, id], (error,results) => {
        if(error) throw error;
        res.status(200).send(`customer updated info with ID: ${id}`);
    })
}
module.exports = {
    getCustomerById,
    getAllCustomers,
    updateCustomer,
}


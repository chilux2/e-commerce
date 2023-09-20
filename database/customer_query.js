
const getCustomerById = "SELECT * FROM customers WHERE id = $1";
    
const getAllCustomers = "SELECT * FROM customers ORDER BY id ASC";

const updateCustomer = "UPDATE customers SET first_name = $1, last_name = $2, customer_email = $3, password = $4 WHERE id = $5";

const getCustomerEmail = "SELECT * FROM customers WHERE customer_email = $1";

const registerUser = "INSERT INTO customers (first_name, last_name, customer_email, password, username) VALUES ($1, $2, $3, $4, $5) RETURNING * ";




module.exports = {
    getCustomerById,
    getAllCustomers,
    updateCustomer,
    registerUser,
    getCustomerEmail,
}
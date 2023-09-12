
const getCustomerById = "SELECT * FROM customers WHERE id = $1";
    
const getAllCustomers = "SELECT * FROM customers ORDER BY id ASC";

const updateCustomer = "UPDATE customers SET first_name = $1, last_name = $2, customer_email = $3, password = $4 WHERE id = $5";

module.exports = {
    getCustomerById,
    getAllCustomers,
    updateCustomer,
}


const getAllOrders = "SELECT * FROM orders " ;

const getOrdersById = " SELECT * FROM orders WHERE id = $1 ";

const createOrder = "INSERT INTO orders (order_date, customer_id) VALUES ($1, $2)";

module.exports = {
    getAllOrders,
    getOrdersById,
    createOrder,
}
const pool = require('../index');

const order_query = require('../database/order_query');

const getAllOrders = (req, res) => {
    
    pool.query(order_query.getAllOrders, (error, results) => {
        if(error) { throw error }
        res.status(200).json(results.rows)
    });
}; 

const getOrdersById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(order_query.getOrdersById, [id] , (error, results) => {
     
    if(error) {
        throw error
    }

    res.status(201).json(results.rows);

    })
};

const createOrder = (req, res) => {
    const { order_date, customer_id } = req.body;

    pool.query(order_query.createOrder, [order_date , customer_id] , (error, results) => {
        if(error) {
            throw error
        }
        res.status(201).send('Order created');
    })
}


module.exports = {
    getAllOrders,
    getOrdersById,
    createOrder,
}
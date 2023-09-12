

const createCart = "INSERT INTO cart ( product_id, order_id, customer_id ) VALUES ($1, $2, $3 ) RETURNING *";

const getCartById = "SELECT * FROM cart WHERE id = $1";

const deleteCart = "DELETE FROM cart WHERE id = $1";


 module.exports = {

    createCart,
    getCartById,
    deleteCart,
 };

 
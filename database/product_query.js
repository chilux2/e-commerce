
const getProductById = "SELECT * FROM products WHERE id = $1 ";

const getAllProducts = "SELECT * FROM products ORDER BY id ASC ";

module.exports = {
    getProductById,
    getAllProducts,
    
}
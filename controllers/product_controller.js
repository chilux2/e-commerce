
const pool = require('../index');

const product_query = require('../database/product_query');


const getProductById = (req, res) => {

    const id = parseInt(req.params.id);

    pool.query(product_query.getProductById, [id], (error,results) => {
        if(error) {throw error}

        res.status(200).json(results.rows);
    })

};

const getAllProducts = (req,res) => {
    
    pool.query(product_query.getAllProducts, (error,results) => {
        if(error) {throw error}
        res.status(201).json(results.rows)
    })
};







module.exports = {
    getProductById,
    getAllProducts,

}
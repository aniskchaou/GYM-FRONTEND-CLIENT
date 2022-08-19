const { findProductById, updateProduct, deleteProductById, deleteAllProducts, findAllProducts, createProduct } = require("../../services/product.services");



exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a user
    const patient = {
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price
    }

    createProduct(patient, res)
};

exports.findAll = (req, res) => {

    findAllProducts(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findProductById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateProduct(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllProducts(req, res)
};
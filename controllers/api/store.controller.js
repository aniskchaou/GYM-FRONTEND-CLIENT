const { createStore, findAllStores, findStoreById, updateStore, deleteStoreById, deleteAllStores } = require("../../services/store.service");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const store = {
        name: req.body.name,
        location: req.body.location,
        contactEmail: req.body.contactEmail,
        contactPhone: req.body.contactPhone,
        workingHours: req.body.workingHours,
        products: req.body.products,
        status: req.body.status
    };
    createStore(store, res);
};

exports.findAll = (req, res) => {
    findAllStores(res);
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findStoreById(id, res);
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateStore(id, req, res);
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteStoreById(id, res);
};

exports.deleteAll = (req, res) => {
    deleteAllStores(req, res);
};

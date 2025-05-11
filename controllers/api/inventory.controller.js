const { createInventory, findAllInventory, findInventoryById, updateInventory, deleteInventoryById, deleteAllInventory } = require("../../services/inventory.services");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const inventory = {
        equipmentName: req.body.equipmentName,
        category: req.body.category,
        status: req.body.status,
        lastMaintenance: req.body.lastMaintenance,
        nextMaintenance: req.body.nextMaintenance,
        usageStats: req.body.usageStats,
        rental: req.body.rental
    };
    createInventory(inventory, res);
};

exports.findAll = (req, res) => {
    findAllInventory(res);
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findInventoryById(id, res);
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateInventory(id, req, res);
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteInventoryById(id, res);
};

exports.deleteAll = (req, res) => {
    deleteAllInventory(req, res);
};

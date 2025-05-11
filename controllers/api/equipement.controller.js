const { createEquipment, findAllEquipment, findEquipmentById, updateEquipment, deleteEquipmentById, deleteAllEquipment } = require("../../services/equipment.services");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const equipment = {
        equipmentName: req.body.equipmentName,
        category: req.body.category,
        status: req.body.status,
        lastMaintenance: req.body.lastMaintenance,
        nextMaintenance: req.body.nextMaintenance,
        usageStats: req.body.usageStats,
        rental: req.body.rental
    };
    createEquipment(equipment, res);
};

exports.findAll = (req, res) => {
    findAllEquipment(res);
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findEquipmentById(id, res);
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateEquipment(id, req, res);
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteEquipmentById(id, res);
};

exports.deleteAll = (req, res) => {
    deleteAllEquipment(req, res);
};

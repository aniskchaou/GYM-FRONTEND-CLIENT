const { createRecovery, findAllRecoveries, findRecoveryById, updateRecovery, deleteRecoveryById, deleteAllRecoveries } = require("../../services/recovery.service");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const recovery = {
        memberId: req.body.memberId,
        lastWorkout: req.body.lastWorkout,
        recoveryPlan: req.body.recoveryPlan
    };
    createRecovery(recovery, res);
};

exports.findAll = (req, res) => {
    findAllRecoveries(res);
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findRecoveryById(id, res);
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateRecovery(id, req, res);
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteRecoveryById(id, res);
};

exports.deleteAll = (req, res) => {
    deleteAllRecoveries(req, res);
};

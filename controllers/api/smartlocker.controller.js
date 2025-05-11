const { createSmartLocker, findAllSmartLockers, findSmartLockerById, updateSmartLocker, deleteSmartLockerById, deleteAllSmartLockers } = require("../../services/smartLocker.service");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const smartLocker = {
        lockerNumber: req.body.lockerNumber,
        location: req.body.location,
        status: req.body.status,
        userId: req.body.userId,
        reservationStartTime: req.body.reservationStartTime,
        reservationEndTime: req.body.reservationEndTime,
        accessCode: req.body.accessCode,
        lastMaintenanceDate: req.body.lastMaintenanceDate
    };
    createSmartLocker(smartLocker, res);
};

exports.findAll = (req, res) => {
    findAllSmartLockers(res);
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findSmartLockerById(id, res);
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateSmartLocker(id, req, res);
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteSmartLockerById(id, res);
};

exports.deleteAll = (req, res) => {
    deleteAllSmartLockers(req, res);
};

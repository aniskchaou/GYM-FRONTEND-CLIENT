const { findHistoryById, updateHistory, deleteHistoryById, deleteAllHistorys, findAllHistorys, createHistory } = require("../../services/history.services");



exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user
    const patient = {
        namepatient: req.body.namepatient,
        emailpatient: req.body.emailpatient,
        birth: req.body.birth,
        telephone: req.body.telephone,
        gender: req.body.gender,
        address: req.body.address
    }

    createHistory(patient, res)
};

exports.findAll = (req, res) => {

    findAllHistorys(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findHistoryById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateHistory(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteHistoryById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllHistorys(req, res)
};
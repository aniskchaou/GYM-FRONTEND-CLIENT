const { findPresenceById, updatePresence, deletePresenceById, deleteAllPresences, findAllPresences, createPresence } = require("../../services/presence.services");



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
        namepatient: req.body.namepatient,
        emailpatient: req.body.emailpatient,
        birth: req.body.birth,
        telephone: req.body.telephone,
        gender: req.body.gender,
        address: req.body.address
    }

    createPresence(patient, res)
};

exports.findAll = (req, res) => {

    findAllPresences(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findPresenceById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updatePresence(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deletePresenceById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllPresences(req, res)
};
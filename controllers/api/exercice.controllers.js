const { findExcerciceById, updateExcercice, deleteExcerciceById, deleteAllExcercices, findAllExcercices, createExcercice } = require("../../services/exercice.services");



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

    createExcercice(patient, res)
};

exports.findAll = (req, res) => {

    findAllExcercices(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findExcerciceById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateExcercice(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteExcerciceById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllExcercices(req, res)
};
const { findTypeSubsById, updateTypeSubs, deleteTypeSubsById, deleteAllTypeSubss, findAllTypeSubs, createTypeSubs } = require("../../services/type.subs.services");



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
         member: req.body.member,
           category: req.body.category,
           period: req.body.period,
           limit: req.body.limit,
           amount: req.body.amount,
           description: req.body.description,
           fee: req.body.fee,
           time_payment: req.body.time_payment

    }

    createTypeSubs(patient, res)
};

exports.findAll = (req, res) => {

    findAllTypeSubs(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findTypeSubsById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateTypeSubs(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteTypeSubsById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllTypeSubss(req, res)
};
const { findAllAttendences, createAttendence } = require("../../services/attendance.services");

exports.findAll = (req, res) => {
    findAllAttendences(res)
};

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const patient = {
        title: req.body.member,
        date: req.body.date
    }
    createAttendence(patient, res)
};
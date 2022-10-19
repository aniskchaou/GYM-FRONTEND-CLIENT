const { findAllNumber, findToday, findMonth, findAbsent, findAllAttendences, createAttendence } = require("../../services/attendance.services");

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


exports.findAllNumber = (req, res) => {
    findAllNumber(res)
};
exports.findToday = (req, res) => {
    findToday(res)
};
exports.findMonth = (req, res) => {
    findMonth(res)
};
exports.findAbsent = (req, res) => {
    findAbsent(res)
};
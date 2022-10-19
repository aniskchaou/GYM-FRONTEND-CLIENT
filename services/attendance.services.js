
const Attendance = require("../models/attendance.models");

exports.findAllAttendences = (res) => {

    Attendance.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}

exports.createAttendence = (a, res) => {
    Attendance.create(a)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Activity."
            });
        });
}

exports.findAllNumber = (res) => {
    Attendance.count()
        .then(data => {
            res.send({ 'all': data })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};
exports.findToday = (res) => {
    Attendance.count()
        .then(data => {
            res.send({ 'today': data })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};
exports.findMonth = (res) => {
};
exports.findAbsent = (res) => {
};

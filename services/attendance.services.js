
const Attendance = require("../models/attendance.models");

exports.findAllAttendences= (res) => {

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

exports.createAttendence = (a,res) => {
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

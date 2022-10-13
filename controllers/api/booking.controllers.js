const { findBookingById, updateBooking, deleteBookingById, deleteAllBookings, findAllBookings, createBooking } = require("../../services/booking.services");



exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const patient = {
        namepatient: req.body.namepatient,
        emailpatient: req.body.emailpatient,
        birth: req.body.birth,
        telephone: req.body.telephone,
        gender: req.body.gender,
        address: req.body.address
    }

    createBooking(patient, res)
};

exports.findAll = (req, res) => {

    findAllBookings(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findBookingById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateBooking(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteBookingById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllBookings(req, res)
};
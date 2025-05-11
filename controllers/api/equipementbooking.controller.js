const { createBooking, findAllBookings, findBookingById, updateBooking, deleteBookingById, deleteAllBookings } = require("../../services/equipmentBooking.services");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const booking = {
        equipmentId: req.body.equipmentId,
        userId: req.body.userId,
        bookingStartTime: req.body.bookingStartTime,
        bookingEndTime: req.body.bookingEndTime,
        status: req.body.status,
        notes: req.body.notes
    };
    createBooking(booking, res);
};

exports.findAll = (req, res) => {
    findAllBookings(res);
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findBookingById(id, res);
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateBooking(id, req, res);
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteBookingById(id, res);
};

exports.deleteAll = (req, res) => {
    deleteAllBookings(req, res);
};

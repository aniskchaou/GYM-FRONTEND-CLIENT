
const Booking = require("../models/booking.models");

exports.findAllBookings = (res) => {

    Booking.findAll()
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

exports.createBooking = (booking,res) => {
    Booking.create(booking,res)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Booking."
            });
        });
}

exports.findBookingById = (id) => {
    Booking.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Booking with id=" + id
            });
        });
}

exports.deleteBookingById = (id, res) => {
    Booking.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Booking was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Booking with id=${id}. Maybe Booking was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Booking with id=" + id
            });
        });
}

exports.updateBooking = (id, req) => {
    Booking.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Booking was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Booking with id=${id}. Maybe Booking was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Booking with id=" + id
            });
        });
}

exports.deleteAllBookings = () => {
    Booking.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Booking were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}
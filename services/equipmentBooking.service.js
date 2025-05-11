const EquipmentBooking = require("../models/equipement.models");

// Get all bookings
exports.findAllBookings = (res) => {
  EquipmentBooking.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving bookings."
      });
    });
};

// Get booking by ID
exports.findBookingById = (id, res) => {
  EquipmentBooking.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Booking not found with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving booking with id=" + id
      });
    });
};

// Create a new booking
exports.createBooking = (bookingData, res) => {
  EquipmentBooking.create(bookingData)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the booking."
      });
    });
};

// Update booking by ID
exports.updateBooking = (id, req, res) => {
  EquipmentBooking.update(req.body, {
    where: { bookingId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Booking was updated successfully." });
      } else {
        res.send({
          message: `Cannot update booking with id=${id}. Maybe not found or request is empty.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating booking with id=" + id
      });
    });
};

// Delete booking by ID
exports.deleteBooking = (id, res) => {
  EquipmentBooking.destroy({
    where: { bookingId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Booking was deleted successfully." });
      } else {
        res.send({
          message: `Cannot delete booking with id=${id}. Maybe it was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete booking with id=" + id
      });
    });
};

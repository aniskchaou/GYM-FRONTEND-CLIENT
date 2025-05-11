const SmartLocker = require("../models/smartlocker.models");

// Retrieve all smart lockers
exports.findAllLockers = (res) => {
  SmartLocker.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving smart lockers."
      });
    });
};

// Find a smart locker by ID
exports.findLockerById = (id, res) => {
  SmartLocker.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Smart locker not found with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving smart locker with id=" + id
      });
    });
};

// Create a new smart locker
exports.createLocker = (lockerData, res) => {
  SmartLocker.create(lockerData)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the smart locker."
      });
    });
};

// Update an existing smart locker
exports.updateLocker = (id, req, res) => {
  SmartLocker.update(req.body, {
    where: { lockerId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Smart locker was updated successfully." });
      } else {
        res.send({
          message: `Cannot update smart locker with id=${id}. Maybe it was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating smart locker with id=" + id
      });
    });
};

// Delete a smart locker
exports.deleteLocker = (id, res) => {
  SmartLocker.destroy({
    where: { lockerId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Smart locker was deleted successfully!" });
      } else {
        res.send({
          message: `Cannot delete smart locker with id=${id}. Maybe it was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete smart locker with id=" + id
      });
    });
};

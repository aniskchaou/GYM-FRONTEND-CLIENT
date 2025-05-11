const VirtualCoaching = require("../models/virtualcoaching.models");

// Retrieve all virtual coaching records for a member
exports.findAllForMember = (memberId, res) => {
  VirtualCoaching.findAll({
    where: { memberId: memberId }
  })
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving virtual coaching records."
      });
    });
};

// Find a specific virtual coaching record by ID
exports.findById = (id, res) => {
  VirtualCoaching.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Virtual coaching record not found with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving virtual coaching record with id=" + id
      });
    });
};

// Create a new virtual coaching entry
exports.createVirtualCoaching = (virtualCoachingData, res) => {
  VirtualCoaching.create(virtualCoachingData)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the virtual coaching entry."
      });
    });
};

// Update an existing virtual coaching entry
exports.updateVirtualCoaching = (id, req, res) => {
  VirtualCoaching.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Virtual coaching entry was updated successfully." });
      } else {
        res.send({
          message: `Cannot update virtual coaching entry with id=${id}. Maybe it was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating virtual coaching entry with id=" + id
      });
    });
};

// Delete a virtual coaching record
exports.deleteVirtualCoaching = (id, res) => {
  VirtualCoaching.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Virtual coaching entry was deleted successfully!" });
      } else {
        res.send({
          message: `Cannot delete virtual coaching entry with id=${id}. Maybe it was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete virtual coaching entry with id=" + id
      });
    });
};

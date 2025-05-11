const Recovery = require("../models/recovery.models");

// Retrieve all recovery records
exports.findAllRecoveries = (res) => {
  Recovery.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving recovery records."
      });
    });
};

// Find a recovery record by ID
exports.findRecoveryById = (id, res) => {
  Recovery.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Recovery record not found with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving recovery record with id=" + id
      });
    });
};

// Create a new recovery record
exports.createRecovery = (recoveryData, res) => {
  Recovery.create(recoveryData)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the recovery record."
      });
    });
};

// Update an existing recovery record
exports.updateRecovery = (id, req, res) => {
  Recovery.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Recovery record was updated successfully." });
      } else {
        res.send({
          message: `Cannot update recovery record with id=${id}. Maybe it was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating recovery record with id=" + id
      });
    });
};

// Delete a recovery record
exports.deleteRecovery = (id, res) => {
  Recovery.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Recovery record was deleted successfully!" });
      } else {
        res.send({
          message: `Cannot delete recovery record with id=${id}. Maybe it was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete recovery record with id=" + id
      });
    });
};

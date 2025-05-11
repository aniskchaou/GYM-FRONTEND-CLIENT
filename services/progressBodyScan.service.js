const ProgressBodyScan = require("../models/bodyscan.models");

// Find all progress scans
exports.findAllScans = (res) => {
  ProgressBodyScan.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving body scans."
      });
    });
};

// Find scan by ID
exports.findScanById = (id, res) => {
  ProgressBodyScan.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Scan not found with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving scan with id=" + id
      });
    });
};

// Create a new scan
exports.createScan = (scanData, res) => {
  ProgressBodyScan.create(scanData)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the body scan."
      });
    });
};

// Update scan by ID
exports.updateScan = (id, req, res) => {
  ProgressBodyScan.update(req.body, {
    where: { scanId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Scan was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update scan with id=${id}. Maybe scan was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating scan with id=" + id
      });
    });
};

// Delete scan by ID
exports.deleteScan = (id, res) => {
  ProgressBodyScan.destroy({
    where: { scanId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Scan was deleted successfully." });
      } else {
        res.send({
          message: `Cannot delete scan with id=${id}. Maybe it was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete scan with id=" + id
      });
    });
};

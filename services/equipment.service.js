const Equipment = require("../models/equipement.models");

// Get all equipment
exports.findAllEquipment = (res) => {
  Equipment.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving equipment."
      });
    });
};

// Get equipment by ID
exports.findEquipmentById = (id, res) => {
  Equipment.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Equipment not found with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving equipment with id=" + id
      });
    });
};

// Create new equipment
exports.createEquipment = (equipmentData, res) => {
  Equipment.create(equipmentData)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the equipment."
      });
    });
};

// Update equipment by ID
exports.updateEquipment = (id, req, res) => {
  Equipment.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Equipment was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update equipment with id=${id}. Maybe not found or request is empty.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating equipment with id=" + id
      });
    });
};

// Delete equipment by ID
exports.deleteEquipment = (id, res) => {
  Equipment.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Equipment was deleted successfully." });
      } else {
        res.send({
          message: `Cannot delete equipment with id=${id}. Maybe it was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete equipment with id=" + id
      });
    });
};

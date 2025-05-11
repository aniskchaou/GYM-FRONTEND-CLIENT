const Trainer = require("../models/trainer.models");

// Retrieve all trainers
exports.findAllTrainers = (res) => {
  Trainer.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving trainers."
      });
    });
};

// Find a trainer by ID
exports.findTrainerById = (id, res) => {
  Trainer.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Trainer not found with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving trainer with id=" + id
      });
    });
};

// Create a new trainer
exports.createTrainer = (trainerData, res) => {
  Trainer.create(trainerData)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the trainer."
      });
    });
};

// Update an existing trainer
exports.updateTrainer = (id, req, res) => {
  Trainer.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Trainer was updated successfully." });
      } else {
        res.send({
          message: `Cannot update trainer with id=${id}. Maybe it was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating trainer with id=" + id
      });
    });
};

// Delete a trainer
exports.deleteTrainer = (id, res) => {
  Trainer.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Trainer was deleted successfully!" });
      } else {
        res.send({
          message: `Cannot delete trainer with id=${id}. Maybe it was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete trainer with id=" + id
      });
    });
};


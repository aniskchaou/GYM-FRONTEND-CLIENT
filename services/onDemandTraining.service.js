const OnDemandTraining = require("../models/ondemandtraining.models");

// Get all training sessions
exports.findAllTrainings = (res) => {
  OnDemandTraining.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving on-demand trainings."
      });
    });
};

// Get a specific training session by ID
exports.findTrainingById = (id, res) => {
  OnDemandTraining.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `On-demand training not found with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving training with id=" + id
      });
    });
};

// Create a new training session
exports.createTraining = (trainingData, res) => {
  OnDemandTraining.create(trainingData)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the training session."
      });
    });
};

// Update a training session
exports.updateTraining = (id, req, res) => {
  OnDemandTraining.update(req.body, {
    where: { trainingId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Training session updated successfully." });
      } else {
        res.send({
          message: `Cannot update training session with id=${id}. Maybe it was not found or request body is empty.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating training session with id=" + id
      });
    });
};

// Delete a training session
exports.deleteTraining = (id, res) => {
  OnDemandTraining.destroy({
    where: { trainingId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Training session deleted successfully." });
      } else {
        res.send({
          message: `Cannot delete training session with id=${id}. Maybe it was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete training session with id=" + id
      });
    });
};

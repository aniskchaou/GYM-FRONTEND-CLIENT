const Program = require("../models/program.models");

// Retrieve all programs
exports.findAllPrograms = (res) => {
  Program.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving programs."
      });
    });
};

// Find a program by ID
exports.findProgramById = (id, res) => {
  Program.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Program not found with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving program with id=" + id
      });
    });
};

// Create a new program
exports.createProgram = (programData, res) => {
  Program.create(programData)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the program."
      });
    });
};

// Update an existing program
exports.updateProgram = (id, req, res) => {
  Program.update(req.body, {
    where: { programId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Program was updated successfully." });
      } else {
        res.send({
          message: `Cannot update Program with id=${id}. Maybe Program was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Program with id=" + id
      });
    });
};

// Delete a program
exports.deleteProgram = (id, res) => {
  Program.destroy({
    where: { programId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Program was deleted successfully!" });
      } else {
        res.send({
          message: `Cannot delete Program with id=${id}. Maybe Program was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Program with id=" + id
      });
    });
};

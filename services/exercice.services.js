
const Exercice = require("../models/exercice.models");

exports.findAllExercices = (res) => {

    Exercice.findAll()
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

exports.createExercice = (Exercice) => {
    Exercice.create(Exercice)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Exercice."
            });
        });
}

exports.findExerciceById = (id) => {
    Exercice.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Exercice with id=" + id
            });
        });
}

exports.deleteExerciceById = (id, res) => {
    Exercice.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Exercice was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Exercice with id=${id}. Maybe Exercice was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Exercice with id=" + id
            });
        });
}

exports.updateExercice = (id, req) => {
    Exercice.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Exercice was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Exercice with id=${id}. Maybe Exercice was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Exercice with id=" + id
            });
        });
}

exports.deleteAllExercices = () => {
    Exercice.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Exercice were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}

const Groupe = require("../models/groupe.models");

exports.getCount = (req, res) => {
    Groupe.count()
        .then(data => {
            res.send({ 'group': data })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}
exports.findAllGroupes = (res) => {

    Groupe.findAll()
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

exports.createGroupe = (groupe, res) => {
    Groupe.create(groupe)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Groupe."
            });
        });
}

exports.findGroupeById = (id) => {
    Groupe.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Groupe with id=" + id
            });
        });
}

exports.deleteGroupeById = (id, res) => {
    Groupe.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Groupe was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Groupe with id=${id}. Maybe Groupe was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Groupe with id=" + id
            });
        });
}

exports.updateGroupe = (id, req, res) => {
    Groupe.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Groupe was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Groupe with id=${id}. Maybe Groupe was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Groupe with id=" + id
            });
        });
}

exports.deleteAllGroupes = () => {
    Groupe.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Groupe were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}
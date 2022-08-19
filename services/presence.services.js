
const Presence = require("../models/presence.models");

exports.findAllPresences = (res) => {

    Presence.findAll()
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

exports.createPresence = (presence,res) => {
    Presence.create(presence)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Presence."
            });
        });
}

exports.findPresenceById = (id) => {
    Presence.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Presence with id=" + id
            });
        });
}

exports.deletePresenceById = (id, res) => {
    Presence.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Presence was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Presence with id=${id}. Maybe Presence was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Presence with id=" + id
            });
        });
}

exports.updatePresence = (id, req) => {
    Presence.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Presence was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Presence with id=${id}. Maybe Presence was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Presence with id=" + id
            });
        });
}

exports.deleteAllPresences = () => {
    Presence.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Presence were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}
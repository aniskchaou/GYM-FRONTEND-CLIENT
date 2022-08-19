
const History = require("../models/history.models");

exports.findAllHistorys = (res) => {

    History.findAll()
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

exports.createHistory = (History) => {
    History.create(History)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the History."
            });
        });
}

exports.findHistoryById = (id) => {
    History.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving History with id=" + id
            });
        });
}

exports.deleteHistoryById = (id, res) => {
    History.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "History was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete History with id=${id}. Maybe History was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete History with id=" + id
            });
        });
}

exports.updateHistory = (id, req) => {
    History.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "History was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update History with id=${id}. Maybe History was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating History with id=" + id
            });
        });
}

exports.deleteAllHistorys = () => {
    History.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} History were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}
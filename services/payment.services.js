
const Payment = require("../models/payment.models");

exports.findAllPayments = (res) => {

    Payment.findAll()
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

exports.createPayment = (payment,res) => {
    Payment.create(payment)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Payment."
            });
        });
}

exports.findPaymentById = (id) => {
    Payment.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Payment with id=" + id
            });
        });
}

exports.deletePaymentById = (id, res) => {
    Payment.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Payment was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Payment with id=${id}. Maybe Payment was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Payment with id=" + id
            });
        });
}

exports.updatePayment = (id, req,res) => {
    Payment.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Payment was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Payment with id=${id}. Maybe Payment was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Payment with id=" + id
            });
        });
}

exports.deleteAllPayments = () => {
    Payment.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Payment were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}
const LoyaltyTransactions = require("../models/LoyaltyTransactions");

// Get all loyalty transactions
exports.findAllTransactions = (res) => {
  LoyaltyTransactions.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving transactions."
      });
    });
};

// Get a transaction by ID
exports.findTransactionById = (id, res) => {
  LoyaltyTransactions.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Transaction not found with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving transaction with id=" + id
      });
    });
};

// Create a new loyalty transaction
exports.createTransaction = (transactionData, res) => {
  LoyaltyTransactions.create(transactionData)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the transaction."
      });
    });
};

// Update a transaction by ID
exports.updateTransaction = (id, req, res) => {
  LoyaltyTransactions.update(req.body, {
    where: { transactionId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Transaction was updated successfully." });
      } else {
        res.send({
          message: `Cannot update transaction with id=${id}. Maybe not found or request is empty.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating transaction with id=" + id
      });
    });
};

// Delete a transaction by ID
exports.deleteTransaction = (id, res) => {
  LoyaltyTransactions.destroy({
    where: { transactionId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Transaction was deleted successfully." });
      } else {
        res.send({
          message: `Cannot delete transaction with id=${id}. Maybe it was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete transaction with id=" + id
      });
    });
};

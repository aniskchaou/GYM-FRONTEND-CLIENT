const { createLoyaltyTransaction, findAllLoyaltyTransactions, findLoyaltyTransactionById, updateLoyaltyTransaction, deleteLoyaltyTransactionById, deleteAllLoyaltyTransactions } = require("../../services/loyaltyTransaction.services");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const transaction = {
        memberId: req.body.memberId,
        pointsEarned: req.body.pointsEarned,
        pointsRedeemed: req.body.pointsRedeemed,
        transactionType: req.body.transactionType,
        description: req.body.description,
        transactionDate: req.body.transactionDate
    };
    createLoyaltyTransaction(transaction, res);
};

exports.findAll = (req, res) => {
    findAllLoyaltyTransactions(res);
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findLoyaltyTransactionById(id, res);
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateLoyaltyTransaction(id, req, res);
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteLoyaltyTransactionById(id, res);
};

exports.deleteAll = (req, res) => {
    deleteAllLoyaltyTransactions(req, res);
};

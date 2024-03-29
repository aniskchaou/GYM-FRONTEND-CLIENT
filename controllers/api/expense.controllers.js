const { findAllNumber, findToday, findWeek, findMonth, getExpenseByDate, findExpenseById, updateExpense, deleteExpenseById, deleteAllExpenses, findAllExpenses, createExpense } = require("../../services/expense.services");



exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const patient = {
        date: req.body.date,
        name: req.body.name,
        amount: req.body.amount
    }

    createExpense(patient, res)
};

exports.findAll = (req, res) => {

    findAllExpenses(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findExpenseById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateExpense(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteExpenseById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllExpenses(req, res)
};

exports.getExpenseByDate = (req, res) => {
    getExpenseByDate(res)
};



exports.findAllNumber = (req, res) => {
    findAllNumber(res)
};
exports.findToday = (req, res) => {
    findToday(res)
};
exports.findWeek = (req, res) => {
    findWeek(res)
};
exports.findMonth = (req, res) => {
    findMonth(res)
};


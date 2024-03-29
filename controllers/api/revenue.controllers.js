const { findAllNumber, findToday, findWeek, findMonth, getIncomeByDate, findRevenueById, updateRevenue, deleteRevenueById, deleteAllRevenues, findAllRevenues, createRevenue } = require("../../services/revenue.services");



exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const patient = {
        name: req.body.name,
        amount: req.body.amount,
        date: req.body.date
    }

    createRevenue(patient, res)
};

exports.findAll = (req, res) => {

    findAllRevenues(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findRevenueById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateRevenue(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteRevenueById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllRevenues(req, res)
};

exports.getIncomeByDate = (req, res) => {
    getIncomeByDate(res)
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
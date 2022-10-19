
const { getCount, getActivityByDate, findActivityById, updateActivity, deleteActivityById, deleteAllActivitys, findAllActivitys, createActivity } = require("../../services/activity.services");

exports.getCount = (req, res) => {
    getCount(req, res)
}

exports.getActivityByDate = (req, res) => {
    getActivityByDate(res)
};

exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const patient = {
        category: req.body.category,
        title: req.body.title,
        member: req.body.member,
        type: req.body.type
    }

    createActivity(patient, res)
};

exports.findAll = (req, res) => {

    findAllActivitys(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findActivityById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateActivity(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteActivityById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllActivitys(req, res)
};

exports.findAllNumber = (req, res) => {
    findAllTypeSubs(res)
};
exports.findYoga = (req, res) => {
    findAllTypeSubs(res)
};
exports.findWorkout = (req, res) => {
    findAllTypeSubs(res)
};
exports.findFitness = (req, res) => {
    findAllTypeSubs(res)
};

exports.findActivityByCategory = (req, res) => {
    findAllTypeSubs(res)
};
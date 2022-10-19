

const { findFitness, findStaffByRole, findWorkout, findYoga, findAllNumber, getCount, findStaffById, updateStaff, deleteStaffById, deleteAllStaffs, findAllStaffs, createStaff } = require("../../services/staff.services");

exports.getCount = (req, res) => {
    getCount(req, res)
}

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const patient = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        date: req.body.date,
        role: req.body.role,
        mobile: req.body.mobile,
        address: req.body.address,
        email: req.body.email
    }

    createStaff(patient, res)
};

exports.findAll = (req, res) => {

    findAllStaffs(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findStaffById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateStaff(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteStaffById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllStaffs(req, res)
};

exports.findStaffByRole = (req, res) => {
    findStaffByRole(res)
};

exports.findAllNumber = (req, res) => {
    findAllNumber(res)
};
exports.findYoga = (req, res) => {
    findYoga(res)
};
exports.findWorkout = (req, res) => {
    findWorkout(res)
};
exports.findFitness = (req, res) => {
    findFitness(res)
};
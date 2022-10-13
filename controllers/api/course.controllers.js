const { findCourseById, updateCourse, deleteCourseById, deleteAllCourses, findAllCourses, createCourse } = require("../../services/course.services");



exports.create = (req, res) => {

    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const patient = {
        namepatient: req.body.namepatient,
        emailpatient: req.body.emailpatient,
        birth: req.body.birth,
        telephone: req.body.telephone,
        gender: req.body.gender,
        address: req.body.address
    }

    createCourse(patient, res)
};

exports.findAll = (req, res) => {

    findAllCourses(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findCourseById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateCourse(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteCourseById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllCourses(req, res)
};
const { createTrainer, findAllTrainers, findTrainerById, updateTrainer, deleteTrainerById, deleteAllTrainers } = require("../../services/trainer.service");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const trainer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        role: req.body.role,
        specializations: req.body.specializations,
        certifications: req.body.certifications,
        experienceYears: req.body.experienceYears,
        availability: req.body.availability,
        ratings: req.body.ratings,
        reviews: req.body.reviews,
        performanceMetrics: req.body.performanceMetrics
    };
    createTrainer(trainer, res);
};

exports.findAll = (req, res) => {
    findAllTrainers(res);
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findTrainerById(id, res);
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateTrainer(id, req, res);
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteTrainerById(id, res);
};

exports.deleteAll = (req, res) => {
    deleteAllTrainers(req, res);
};

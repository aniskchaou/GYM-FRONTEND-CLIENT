const { createProgram, findAllPrograms, findProgramById, updateProgram, deleteProgramById, deleteAllPrograms } = require("../../services/program.service");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const program = {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        duration: req.body.duration,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        difficultyLevel: req.body.difficultyLevel,
        trainerId: req.body.trainerId,
        maxParticipants: req.body.maxParticipants,
        currentParticipants: req.body.currentParticipants,
        status: req.body.status
    };
    createProgram(program, res);
};

exports.findAll = (req, res) => {
    findAllPrograms(res);
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findProgramById(id, res);
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateProgram(id, req, res);
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteProgramById(id, res);
};

exports.deleteAll = (req, res) => {
    deleteAllPrograms(req, res);
};

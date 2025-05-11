const { createOnDemandTraining, findAllOnDemandTrainings, findOnDemandTrainingById, updateOnDemandTraining, deleteOnDemandTrainingById, deleteAllOnDemandTrainings } = require("../../services/onDemandTraining.service");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const onDemandTraining = {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        difficultyLevel: req.body.difficultyLevel,
        duration: req.body.duration,
        videoUrl: req.body.videoUrl,
        trainerId: req.body.trainerId,
        price: req.body.price,
        accessType: req.body.accessType,
        equipmentRequired: req.body.equipmentRequired,
        status: req.body.status
    };
    createOnDemandTraining(onDemandTraining, res);
};

exports.findAll = (req, res) => {
    findAllOnDemandTrainings(res);
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findOnDemandTrainingById(id, res);
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateOnDemandTraining(id, req, res);
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteOnDemandTrainingById(id, res);
};

exports.deleteAll = (req, res) => {
    deleteAllOnDemandTrainings(req, res);
};

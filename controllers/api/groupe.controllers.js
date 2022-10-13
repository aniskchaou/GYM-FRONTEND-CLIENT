const { getCount, findGroupeById, updateGroupe, deleteGroupeById, deleteAllGroupes, findAllGroupes, createGroupe } = require("../../services/groupe.services");

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
        name: req.body.groupe_name,
    }

    createGroupe(patient, res)
};

exports.findAll = (req, res) => {

    findAllGroupes(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findGroupeById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateGroupe(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteGroupeById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllGroupes(req, res)
};
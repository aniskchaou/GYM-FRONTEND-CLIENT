const { findMemberByName, getCount, getMemberByDate, findMemberById, updateMember, deleteMemberById, deleteAllMembers, findAllMembers, createMember } = require("../../services/member.services");

exports.getCount = (req, res) => {
    getCount(req, res)
}

exports.getMemberByDate = (req, res) => {
    getMemberByDate(res)
};

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
        birth_date: req.body.birth_date,
        groupe: req.body.groupe,
        activity: req.body.activity,
        address: req.body.address,
        mobile: req.body.mobile,
        weight: req.body.weight,
        size: req.body.size,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        type: req.body.type,
        coach: req.body.coach
    }

    createMember(patient, res)
};

exports.findAll = (req, res) => {

    findAllMembers(res)
};

exports.search = (req, res) => {
    const name = req.params.name;
    findMemberByName(name, res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findMemberById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateMember(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteMemberById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllMembers(req, res)
};
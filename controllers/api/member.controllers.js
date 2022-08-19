const {getCount, getMemberByDate,findMemberById, updateMember, deleteMemberById, deleteAllMembers, findAllMembers, createMember } = require("../../services/member.services");

exports.getCount=(req, res)=>{
getCount(req,res)
}

exports.getMemberByDate = (req, res) => {
    getMemberByDate(res)
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user
    const patient = {
        namepatient: req.body.namepatient,
        emailpatient: req.body.emailpatient,
        birth: req.body.birth,
        telephone: req.body.telephone,
        gender: req.body.gender,
        address: req.body.address
    }

    createMember(patient, res)
};

exports.findAll = (req, res) => {

    findAllMembers(res)
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
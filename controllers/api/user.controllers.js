

const { loginUser, updateUser, findUserById } = require("../../services/user.services");


exports.login = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const user = {
        username: req.body.username,
        password: req.body.password,

    }

    loginUser(user.username, user.password, res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findUserById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateUser(id, req, res)
};

const { findEventById, updateEvent, deleteEventById, deleteAllEvents, findAllEvents, createEvent } = require("../../services/event.services");



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
        event_name: req.body.event_name,
        event_date: req.body.event_date,
        place_id: req.body.place_id,
        starttime: req.body.starttime,
        endtime: req.body.endtime
    }

    createEvent(patient, res)
};

exports.findAll = (req, res) => {

    findAllEvents(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findEventById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateEvent(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteEventById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllEvents(req, res)
};
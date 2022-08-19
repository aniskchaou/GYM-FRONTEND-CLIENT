const { findAllAttendences,createAttendence} = require("../../services/attendance.services");

exports.findAll = (req, res) => {

    findAllAttendences(res)

   /* res.send( [
                                       { title: 'event 1', date: '2022-08-05T08:00:00', color: 'red' },
                                       { title: 'event 2', date: '2022-08-05T02:00:00' },
                                       { title: 'event 1', date: '2022-08-05T05:00:00', color: 'red' },
                                                                              { title: 'event 2', date: '2022-08-05T14:00:00' },
                                                                              { title: 'event 1', date: '2022-08-05T12:00:00', color: 'red' },
                                                                                                                     { title: 'event 2', date: '2022-08-05T20:00:00' },
                                                                                                                     { title: 'event 1', date: '2022-08-05T18:00:00', color: 'red' },
                                                                                                                                                            { title: 'event 2', date: '2022-08-05T04:00:00' }
                                     ])*/
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
    console.log(req.body)
 //console.log(req.body.date.substr(0, 8));
    const patient = {
        title: req.body.member,
        date: req.body.date
    }

    createAttendence(patient, res)
};
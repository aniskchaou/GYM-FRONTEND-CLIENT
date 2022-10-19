
const Event = require("../models/event.models");

exports.findAllEvents = (res) => {

    Event.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}

exports.createEvent = (event, res) => {
    Event.create(event)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Event."
            });
        });
}

exports.findEventById = (id) => {
    Event.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Event with id=" + id
            });
        });
}

exports.deleteEventById = (id, res) => {
    Event.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Event was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Event with id=" + id
            });
        });
}

exports.updateEvent = (id, req, res) => {
    Event.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Event was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Event with id=${id}. Maybe Event was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Event with id=" + id
            });
        });
}

exports.deleteAllEvents = () => {
    Event.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Event were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}


exports.findAllNumber = (res) => {
    Event.count()
        .then(data => {
            res.send({ 'all': data })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};
exports.findToday = (res) => {
    Event.count()
        .then(data => {
            res.send({ 'today': data })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};
exports.findWeek = (res) => {

};
exports.findMonth = (res) => {

};

exports.findEventByDate = (res) => {
    Event.findAll()
        .then(data => {
            var dates = []
            var amounts = []
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            data.forEach(function (element) {
                const d = new Date(element.event_date)
                if (element.event_date != null && element.event_name != null) {
                    dates.push(monthNames[d.getMonth()])
                    amounts.push(element.id)
                }

            });

            const response = {
                labels: dates,
                datasets: [
                    {
                        label: 'expenses',
                        data: amounts,
                        borderColor: '#ffa400',
                        backgroundColor: '#ffa400',
                    }
                ],
            };
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};
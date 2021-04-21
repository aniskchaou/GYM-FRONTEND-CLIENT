var _booking = [{
    "approximate_time": "23 / 5 / 2020",
    "name": "Raymond Rhéaume",
    "route_id": "3322D23D",
    "price": "12$",
    "status": "Payé"
}]

exports.getAll = () => {
    return _booking;
};

exports.get = id => {
    return _booking.find(item => item.id === id);
};

exports.create = (data) => {
    _booking.push(data);
};

exports.update = (old, data) => {

    var foundIndex = _booking.findIndex(item => item.id === data.id);
    _booking[foundIndex] = data;
};

exports.remove = id => {
    _booking.splice(_booking.findIndex(item => item.id === id), 1);
};

exports.removeAll = () => {

};

exports.findByTitle = title => {

};


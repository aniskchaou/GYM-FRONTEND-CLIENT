const Store = require("../models/store.models");

// Retrieve all stores
exports.findAllStores = (res) => {
  Store.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving stores."
      });
    });
};

// Find a store by ID
exports.findStoreById = (id, res) => {
  Store.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Store not found with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving store with id=" + id
      });
    });
};

// Create a new store
exports.createStore = (storeData, res) => {
  Store.create(storeData)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the store."
      });
    });
};

// Update an existing store
exports.updateStore = (id, req, res) => {
  Store.update(req.body, {
    where: { storeId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Store was updated successfully." });
      } else {
        res.send({
          message: `Cannot update store with id=${id}. Maybe it was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating store with id=" + id
      });
    });
};

// Delete a store
exports.deleteStore = (id, res) => {
  Store.destroy({
    where: { storeId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Store was deleted successfully!" });
      } else {
        res.send({
          message: `Cannot delete store with id=${id}. Maybe it was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete store with id=" + id
      });
    });
};

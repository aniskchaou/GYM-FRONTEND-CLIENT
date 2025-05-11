const Inventory = require("../models/Inventory");

// Get all inventory items
exports.findAllInventory = (res) => {
  Inventory.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving inventory."
      });
    });
};

// Get a single inventory item by ID
exports.findInventoryById = (id, res) => {
  Inventory.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Inventory item not found with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving inventory with id=" + id
      });
    });
};

// Create a new inventory item
exports.createInventory = (itemData, res) => {
  Inventory.create(itemData)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the inventory item."
      });
    });
};

// Update an inventory item by ID
exports.updateInventory = (id, req, res) => {
  Inventory.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Inventory item was updated successfully." });
      } else {
        res.send({
          message: `Cannot update inventory item with id=${id}. Maybe it was not found or request is empty.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating inventory with id=" + id
      });
    });
};

// Delete an inventory item by ID
exports.deleteInventory = (id, res) => {
  Inventory.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Inventory item was deleted successfully." });
      } else {
        res.send({
          message: `Cannot delete inventory item with id=${id}. Maybe it was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete inventory with id=" + id
      });
    });
};

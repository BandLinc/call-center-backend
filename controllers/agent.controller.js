const Agent = require("../models/agent.model.js");

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Agent.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving agents.",
      });
    else res.send(data);
  });
};

// Find a single Angent with a Username
exports.findOne = (req, res) => {
  Agent.findById(req.params.username, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.username}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.username,
        });
      }
    } else res.send(data);
  });
};

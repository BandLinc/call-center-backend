const Managers = require("../models/managers.model.js");

// Retrieve all Managers for the day from the database.
exports.findAll = (req, res, next) => {
  Managers.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Managers.",
      });
    else res.send(data);
  });
};

const DutyRoster = require("../models/dutyroster.model.js");

// Retrieve all Customers from the database.
exports.findAll = (req, res, next) => {
  DutyRoster.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Duty Roster.",
      });
    else res.send(data);
  });
};

// Find a single Roster for the Date
exports.findOne = (req, res, next) => {
  DutyRoster.findById(req.params.date, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Duty Roster for the following date ${req.params.date}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving Duty Roster for the following date" +
            req.params.date,
        });
      }
    } else res.send(data);
  });
};

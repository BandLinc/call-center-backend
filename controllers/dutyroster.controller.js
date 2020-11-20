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

//Add new Duty Roster
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Customer
  const dutyrosters = new DutyRoster({
    ID: req.body.ID,
    Location: req.body.Location,
    TeamLead: req.body.TeamLead,
    SupportChannel: req.body.SupportChannel,
    Shift: req.body.Shift,
    TEAMs: req.body.TEAMs,
    FOLDER: req.body.FOLDER,
    Date: req.body.Date,
    Submitter: req.body.Submitter,
    SubmitTime: req.body.SubmitTime,
  });

  // Save Customer in the database
  Customer.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    else res.send(data);
  });
};

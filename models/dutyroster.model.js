const sql = require("./db.js");

// constructor
const DutyRoster = function (agent) {
  this.ID = DutyRoster.ID;
  this.Location = DutyRoster.Location;
  this.TeamLead = DutyRoster.TeamLead;
  this.SupportChannel = DutyRoster.SupportChannel;
  this.Shift = DutyRoster.Shift;
  this.TEAMs = DutyRoster.TEAMs;
  this.FOLDER = DutyRoster.FOLDER;
  this.Date = DutyRoster.Date;
  this.Submitter = DutyRoster.Submitter;
  this.SubmitTime = DutyRoster.SubmitTime;
};

//Select Duty Roster by Date
DutyRoster.findById = (Date, result) => {
  sql.query(`SELECT * FROM dutyroster WHERE Date = '${Date}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Roaster: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

//Return all the Duty Roaster
DutyRoster.getAll = (result) => {
  sql.query("SELECT * FROM dutyroster", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("agents: ", res);
    result(null, res);
  });
};

//Add Duty Roster
DutyRoster.create = (dutyroster, result) => {
  sql.query("INSERT INTO dutyroster SET ?", dutyroster, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...dutyroster });
    result(null, { id: res.insertId, ...dutyroster });
  });
};

module.exports = DutyRoster;

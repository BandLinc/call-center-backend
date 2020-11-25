const sql = require("./db.js");

//Managers object which matches the duty roaster in structure
// constructor
const Managers = function (agent) {
  this.ID = Managers.ID;
  this.Location = Managers.Location;
  this.TeamLead = Managers.TeamLead;
  this.SupportChannel = Managers.SupportChannel;
  this.Shift = Managers.Shift;
  this.TEAMs = Managers.TEAMs;
  this.FOLDER = Managers.FOLDER;
  this.Date = Managers.Date;
  this.Submitter = Managers.Submitter;
  this.SubmitTime = Managers.SubmitTime;
};

//Return all the Duty Roaster
Managers.getAll = (result) => {
  sql.query(
    "SELECT TeamLead,SupportChannel FROM dutyroster where SupportChannel in ('Operations Manager','Afternoon Team Lead','Morning Team Lead')",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("Managers: ", res);
      result(null, res);
    }
  );
};

module.exports = Managers;

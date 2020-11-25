const sql = require("./db.js");

// constructor
const DailyTargets = function (agent) {
  this.ID = DailyTargets.ID;
  this.Parameter = DailyTargets.Parameter;
  this.Target = DailyTargets.Target;
  this.Unit = DailyTargets.Target;
  this.Submitter = DailyTargets.Submitter;
  this.Submitted = DailyTargets.Submitted;
};

//Return all the Daily Targets
DailyTargets.getAll = (result) => {
  sql.query("SELECT * FROM D_DailyAgentTargets", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Daily Targets: ", res);
    result(null, res);
  });
};

module.exports = DailyTargets;

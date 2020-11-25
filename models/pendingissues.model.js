const sql = require("./db.js");

// constructor
const PendingIssues = function (agent) {
  this.ID = PendingIssues.ID;
  this.Title = PendingIssues.Title;
  this.Issue = PendingIssues.Issue;
  this.Status = PendingIssues.Status;
  this.Submitter = PendingIssues.Submitter;
  this.SubmitDate = PendingIssues.SubmitDate;
};

//Return all the Issues that are Pending
PendingIssues.getAll = (result) => {
  sql.query(
    "select * from pendingissues order by SubmitDate desc limit 3",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("pendingissues: ", res);
      result(null, res);
    }
  );
};

module.exports = PendingIssues;

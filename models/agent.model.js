const sql = require("./db.js");

// constructor
const Agent = function (agent) {
  this.ID = agent.ID;
  this.Date = agent.Date;
  this.SeniorManager = agent.SeniorManager;
  this.OPSManager = agent.OPSManager;
  this.TeamLeader = agent.TeamLeader;
  this.TLUsername = agent.TLUsername;
  this.Username = agent.Username;
  this.EK = agent.EK;
  this.Name = agent.Name;
  this.Segment = agent.Segment;
  this.Family = agent.Family;
  this.Adherence = agent.Adherence;
  this.CA_SHT = agent.CA_SHT;
  this.CA = agent.CA;
  this.AHT = agent.AHT;
  this.AHOT = agent.AHOT;
  this.Occupancy = agent.Occupancy;
  this.Shortcalls = agent.Shortcalls;
  this.FCR = agent.FCR;
  this.NPS = agent.NPS;
  this.Resolution = agent.Resolution;
  this.Satisfaction = agent.Satisfaction;
  this.Shift = agent.Shift;
  this.FTEHrs = agent.FTEHrs;
  this.Talktime = agent.Talktime;
  this.HoldTime = agent.HoldTime;
  this.LoginTime = agent.LoginTime;
  this.NotReady = agent.NotReady;
  this.FTE_CA = agent.FTE_CA;
  this.ROLE = agent.ROLE;
  this.Location = agent.Location;
  this.SMUsername = agent.SMUsername;
  this.OPSUsername = agent.OPSUsername;
  this.Submitter = agent.Submitter;
};

//Select Agent by username
Agent.findById = (Username, result) => {
  sql.query(
    `SELECT * FROM d_dailyagent WHERE Username = ${Username}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found Agent: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Customer with the id
      result({ kind: "not_found" }, null);
    }
  );
};

//Return all the agents
Agent.getAll = (result) => {
  sql.query("SELECT * FROM d_dailyagent", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("agents: ", res);
    result(null, res);
  });
};

module.exports = Agent;

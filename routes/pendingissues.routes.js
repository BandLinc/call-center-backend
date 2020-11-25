var cors = require("cors");
module.exports = (app) => {
  const pendingissues = require("../controllers/pendingissues.controller.js");

  // Retrieve all Customers
  app.get("/pendingissues", pendingissues.findAll, cors());
};

var cors = require("cors");
module.exports = (app) => {
  const dailytargets = require("../controllers/dailytargets.controller.js");

  // Retrieve all Customers
  app.get("/dailytargets", dailytargets.findAll, cors());
};

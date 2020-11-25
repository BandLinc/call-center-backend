var cors = require("cors");
module.exports = (app) => {
  const dutyroster = require("../controllers/managers.controller.js");

  // Retrieve all Managers
  app.get("/managers", dutyroster.findAll, cors());
};

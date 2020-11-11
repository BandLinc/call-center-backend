module.exports = (app) => {
  const agents = require("../controllers/agent.controller.js");

  // Retrieve all Customers
  app.get("/agents", agents.findAll);

  // Retrieve a single Customer with customerId
  app.get("/agent/:username", agents.findOne);
};

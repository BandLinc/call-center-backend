module.exports = (app) => {
  const dutyroster = require("../controllers/dutyroster.controller.js");

  // Retrieve all Customers
  app.get("/dutyroster", dutyroster.findAll);

  // Retrieve a single Customer with customerId
  app.get("/dutyroster/:date", dutyroster.findOne);
};

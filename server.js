const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", cors(), (req, res, next) => {
  res.json({ message: "Welcome to Call Center Application." });
});

const PORT = process.env.PORT || 3000;
require("./routes/customer.routes.js")(app);
require("./routes/agent.routes.js")(app);
require("./routes/dutyroster.routes.js")(app);

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

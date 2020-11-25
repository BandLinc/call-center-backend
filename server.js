const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Ccontrol-Allow-Origin", "*");
  res.header(
    "Access-Ccontrol-Allow-Header",
    "Origin, X-Request-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPOTIONS") {
    res.header(
      "Access-Ccontrol-Allow-Methods",
      "PUT, POST, PATCH, GET, DELETE"
    );
    return res.status(200).json({});
  }
  next();
});

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
require("./routes/managers.routes.js")(app);
require("./routes/pendingissues.routes.js")(app);

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

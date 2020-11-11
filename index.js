require("dotenv").config();
const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());

let db_host = process.env.DB_HOST;
let db_user = process.env.DB_USER;
let db_password = process.env.DB_PASSWORD;
let db_database = process.env.DB_NAME;

var mysqlConnection = mysql.createConnection({
  host: db_host,
  user: db_user,
  password: db_password,
  database: db_database,
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) console.log("DB connection succeded.");
  else
    console.log(
      "DB connection failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
});

app.listen(3000, () =>
  console.log("Express server is runnig at port no : 3000")
);

//Get all kpi entries in database
app.get("/kpis", (req, res) => {
  mysqlConnection.query("SELECT * FROM D_DailyAgent", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

//Get entire kpi for single agent
app.get("/agent/:username", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM D_DailyAgent WHERE Username = ?",
    [req.params.username],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

app.get("/", (req, res) => {
  res.send("Welcome");
});

//get specific kpi for agent

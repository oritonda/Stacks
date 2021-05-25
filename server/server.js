// imports
const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("./database/connection");

const app = express();

// assigning a port number
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(body_parser.urlencoded({ extended: false }));

// parse application/json
app.use(body_parser.json());

// connecting to a port
app.listen(port, () => {
  console.log("listening to ", port);
});

const express = require("express");
const path = require("path");
require("dotenv").config();
var bodyParser = require("body-parser");
var cors = require("cors");
var compression = require("compression");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use(express.static(path.join(__dirname, "dist/casenet1"))); //since index.html in dist is static

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/casenet1/index.html")); //send all requests to our page to dist
});

const PORT = process.env.PORT || 4709;

app.listen(PORT, (req, res) => {
  console.log("Running on port " + PORT);
});

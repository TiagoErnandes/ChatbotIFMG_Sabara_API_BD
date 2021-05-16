const express = require("express");
const upload = require("express-fileupload");
const consign = require("consign");
const cors = require("cors");

module.exports = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(upload());
  app.use(express.static("public"));
  consign().include("controllers").into(app);
  return app;
};

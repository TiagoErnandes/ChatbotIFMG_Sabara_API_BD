const Login = require("../models/login");

module.exports = (app) => {
  app.post("/auth", (req, res) => {
    const palavra = req.body;
    console.log(palavra);
    Login.getAll(palavra, res);
  });
};

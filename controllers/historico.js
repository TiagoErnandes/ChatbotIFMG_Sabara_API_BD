const Historico = require("../models/historico");

module.exports = (app) => {
  app.get("/historicoUser", (req, res) => {
    Historico.getAllUserMessages(res);
  });

  app.get("/historcoBot", (req, res) => {
    Historico.getAllBotMessages(res);
  });

};
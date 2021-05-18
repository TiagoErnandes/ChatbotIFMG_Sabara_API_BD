const Historico = require("../models/historico");

module.exports = (app) => {
  app.get("/historicoUser", (req, res) => {
    Historico.getAllUserMessages(res);
  });

  app.get("/historcoBot", (req, res) => {
    Historico.getAllBotMessages(res);
  });

  app.get("/historcoArquivo", (req, res) => {
    Historico.getAllArquivosMessages(res);
  });

  app.get("/historcoRespostas", (req, res) => {
    Historico.getAllRespostasMessages(res);
  });
};
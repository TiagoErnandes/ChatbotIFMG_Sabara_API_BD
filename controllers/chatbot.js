const Chatbot = require("../models/chatbot");

module.exports = (app) => {
  /* app.get("/chatbot/:id", (req, res) => {
    const id = parseInt(req.params.id);   
    Chatbot.getOne(id, res);
    }); */

  app.post("/chatbot", (req, res) => {
    const dados = req.body;
    Chatbot.create(dados, res);
  });
};

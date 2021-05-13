const Respostas = require("../models/respostas");

module.exports = (app) => {
  app.get("/respostas", (req, res) => {
    Respostas.getAll(res);
  });

  app.post("/respostas", (req, res) => {
    const palavra = req.body;
    console.log(palavra);
    Respostas.create(palavra, res);
  });

  app.delete("/respostas/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Respostas.delete(id, res);
  });
  app.put("/respostas/:id", (req, res) => {
    const palavra = req.body;
    const id = parseInt(req.params.id);
    Respostas.alter(id, palavra, res);
  });
};

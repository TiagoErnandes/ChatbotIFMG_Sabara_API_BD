const Intencao = require("../models/intencoes");

module.exports = (app) => {
  app.get("/intencoes", (req, res) => {
    Intencao.getAll(res);
  });

  app.post("/intencoes", (req, res) => {
    const palavra = req.body;
    console.log(palavra);
    Intencao.create(palavra, res);
  });

  app.delete("/intencoes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Intencao.delete(id, res);
  });
  app.put("/intencoes/:id", (req, res) => {
    const palavra = req.body;
    const id = parseInt(req.params.id);
    Intencao.alter(id, palavra, res);
  });
};

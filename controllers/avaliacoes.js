const Avaliacoes = require("../models/avaliacoes");

module.exports = (app) => {
  app.get("/avaliacoes", (req, res) => {
    Avaliacoes.getAll(res);
  });

  app.get("/avaliacoes/:id", (req, res) => {
    Avaliacoes.get(res);
  });

  app.post("/avaliacoes", (req, res) => {
    const solicitacao = req.body;
    console.log(solicitacao);
    Avaliacoes.create(solicitacao, res);
  });

  app.delete("/avaliacoes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Avaliacoes.delete(id, res);
  });
  app.put("/avaliacoes/:id", (req, res) => {
    const solicitacao = req.body;
    const id = parseInt(req.params.id);
    Avaliacoes.alter(id, solicitacao, res);
  });
};

const Arquivo = require("../models/arquivos");

module.exports = (app) => {
  app.get("/arquivos", (req, res) => {
    Arquivo.getAll(res);
  });

  app.get("/arquivos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Arquivo.getOne(id, res);
  });

  app.post("/arquivos", (req, res) => {
    let nome = req.body.nome;
    let caminho = req.body.caminho;
    Arquivo.add(nome, caminho, res);
  });

  app.delete("/arquivos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Arquivo.erase(id, res);
  });

  app.put("/arquivos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let nome = req.body.nome;
    let caminho = req.body.caminho;
    Arquivo.edit(id, nome,caminho, res);
  });
  
};

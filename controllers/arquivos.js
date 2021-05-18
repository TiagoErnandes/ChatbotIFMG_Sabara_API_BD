const Arquivo = require("../models/arquivos");
const fs = require("fs");

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

  app.post("/arquivos/upload", function (req, res) {
    console.log(req.files);
    if (req.body.caminho) {
      fs.unlinkSync("./public/" + req.body.caminho);
    }
    if (req.files) {
      console.log(req.files.arquivo);
      var file = req.files.arquivo;
      var filename = file.name;
      file.mv("./public/storage/files/" + filename, function (err) {
        if (err) {
          res.send(err);
        } else {
          res.send("File Uploaded");
        }
      });
    }
  });

  app.delete("/arquivos/:id", (req, res) => {
    fs.unlinkSync("./public/" + req.body.caminho);
    const id = parseInt(req.params.id);
    Arquivo.erase(id, res);
  });

  app.put("/arquivos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let nome = req.body.nome;
    let caminho = req.body.caminho;
    Arquivo.edit(id, nome, caminho, res);
  });
};

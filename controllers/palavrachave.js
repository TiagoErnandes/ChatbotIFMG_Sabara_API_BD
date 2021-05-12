const Palavrachave = require("../models/palavrachave");

module.exports = (app) => {
  app.get("/palavrachave", (req, res) => {
    Palavrachave.getAll(res);
  });

  app.post("/palavrachave", (req, res) => {
    const palavra = req.body;
    console.log(palavra);
    Palavrachave.create(palavra, res);
  });

  app.delete("/palavrachave/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Palavrachave.delete(id, res);
  });
  app.put("/palavrachave/:id", (req, res) => {
    const palavra = req.body;
    const id = parseInt(req.params.id);
    Palavrachave.alter(id, palavra, res);
  });
};

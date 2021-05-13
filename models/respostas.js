const moment = require("moment");
const conexao = require("../bancodedados/conexao");

class Respostas {
  create(palavra, res) {
    const criado_em = moment().format("YYYY-MM-DD HH:MM:DD");
    const atualizado_em = moment().format("YYYY-MM-DD HH:MM:DD");
    const dadosCompletos = { ...palavra, criado_em, atualizado_em };    
    const sql = "INSERT INTO respostas SET ?";

    conexao.query(sql, dadosCompletos, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(201).json(resultado);
      }
    });
  }

  getAll(res) {
    const sql = "SELECT * FROM respostas";
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }

  delete(id, res) {
    const sql = `DELETE FROM respostas WHERE id=${id}`;

    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }
  alter(id, palavra, res) {
    const sql = "UPDATE respostas SET ? WHERE id=?";
    conexao.query(sql, [palavra, id], (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }
}

module.exports = new Respostas();

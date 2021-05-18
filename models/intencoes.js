const moment = require("moment");
const conexao = require("../bancodedados/conexao");

class Intencao {
  create(palavra, res) {
    const criado_em = moment().format("YYYY-MM-DD HH:MM:DD");
    const atualizado_em = moment().format("YYYY-MM-DD HH:MM:DD");
    const dadosCompletos = { ...palavra, criado_em, atualizado_em };
    const sql = "INSERT INTO Intencao SET ?";

    conexao.query(sql, dadosCompletos, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(201).json(resultado);
      }
    });
  }

  getOne(id, res) {
    const sql = `SELECT * FROM Intencao WHERE id=${id}`;
    conexao.query(sql, (erro, resultado) => {
      const resultadoUm = resultado[0];
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultadoUm);
      }
    });
  }
  getAll(res) {
    const sql = "SELECT * FROM Intencao";
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }

  delete(id, res) {
    const sql = `DELETE FROM Intencao WHERE id=${id}`;

    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }
  alter(id, palavra, res) {
    const sql = "UPDATE Intencao SET ? WHERE id=?";
    conexao.query(sql, [palavra, id], (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }
}

module.exports = new Intencao();

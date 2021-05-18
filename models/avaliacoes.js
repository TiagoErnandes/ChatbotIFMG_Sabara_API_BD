const moment = require("moment");
const conexao = require("../bancodedados/conexao");

class Avaliacoes {
  create(solicitacao, res) {
    const dadosCompletos = { ...solicitacao };
    const sql = "INSERT INTO Avaliacao SET ?";

    conexao.query(sql, dadosCompletos, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(201).json(resultado);
      }
    });
  }

  get(id, res) {
    const sql = `SELECT * FROM Avaliacao INNER JOIN Mensagens ON Avaliacao.id_Mensagens = Mensagens.id WHERE id=${id}`;
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
    const sql =
      "SELECT * FROM Avaliacao INNER JOIN Mensagens ON Avaliacao.id_Mensagens = Mensagens.id";
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }

  delete(id, res) {
    const sql = `DELETE FROM Avaliacao WHERE id=${id}`;

    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }
  alterLido(id, res) {
    const date = moment().format("YYYY-MM-DD HH:MM:DD");
    const sql = `UPDATE Avaliacao SET Lido_em='${date}' WHERE id=${id}`;
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }
  alterTerminado(id, res) {
    const date = moment().format("YYYY-MM-DD HH:MM:DD");
    const sql = `UPDATE Avaliacao SET Terminado_em='${date}' WHERE id=${id}`;
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }
}

module.exports = new Avaliacoes();

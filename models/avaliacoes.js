const moment = require("moment");
const conexao = require("../bancodedados/conexao");

class Avaliacoes {
  create(solicitacao, res) {
    const Lido_em = moment().format("YYYY-MM-DD HH:MM:DD");
    const Terminado_em = moment().format("YYYY-MM-DD HH:MM:DD");
    const dadosCompletos = { ...solicitacao, Lido_em, Terminado_em };
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
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
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
  alter(id, palavra, res) {
    const sql = "UPDATE Avaliacao SET ? WHERE id=?";
    conexao.query(sql, [palavra, id], (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }
}

module.exports = new Avaliacoes();


const moment = require("moment");
const conexao = require("../bancodedados/conexao");

class Historico {

  getAllUserMessages(res) {
    const sql = "SELECT * FROM Mensagens";
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }

  getAllBotMessages(res) {
    const sql = "SELECT * FROM Bot_mensagens";
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }
}

module.exports = new Historico();

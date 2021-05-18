const moment = require("moment");
const conexao = require("../bancodedados/conexao");

class Historico {
  getAllUserMessages(res) {
    const sql =
      "SELECT * FROM mensagens INNER JOIN arquivos ON mensagens.arquivo_id = arquivos.id";
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }

  getAllBotMessages(res) {
    const sql =
      "SELECT * FROM bot_mensagens INNER JOIN mensagens ON bot_mensagens.id_Mensagens = mensagens.id INNER JOIN respostas ON bot_mensagens.id_Respostas = respostas.id";
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

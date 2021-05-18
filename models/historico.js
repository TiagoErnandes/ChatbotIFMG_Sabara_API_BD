
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


  getAllArquivosMessages(res) {
    const sql = "SELECT nome, ip, mensagens.criado_em as criacao, Arquivo_id as idArquivo, texto_Mensagens text FROM Mensagens INNER JOIN Arquivos ON Mensagens.Arquivo_id = Arquivos.id";
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  }

  getAllRespostasMessages(res) {
    const sql = "SELECT * FROM Respostas INNER JOIN Bot_mensagens ON Respostas.id = Bot_mensagens.id";
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

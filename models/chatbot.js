const conexao = require("../bancodedados/conexao");

class Chatbot {
  /* getOne(id, res) {
        const sql = `SELECT * FROM mensagens WHERE id=${id}`;
        conexao.query(sql, (erro, resultado) => {
            const resultadoUm = resultado[0];
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultadoUm);
            }
        });
    } */

  create(dados, res) {
    const sql = `INSERT INTO mensagens SET ?;`;

    conexao.query(sql, dados, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(201).json(resultado);
      }
    });
  }
}

module.exports = new Chatbot();

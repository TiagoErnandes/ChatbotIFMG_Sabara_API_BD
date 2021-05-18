const conexao = require("../bancodedados/conexao");

class Chatbot {

    getOne(id, res) {
        const sql = `SELECT * FROM Bot_mensagens WHERE id=${id}`;
        conexao.query(sql, (erro, resultado) => {
            const resultadoUm = resultado[0];
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultadoUm);
            }
        });
    }

    create(palavra, res) {
        const sql = `INSERT INTO bot_mensagens (id_mensagens, criado_em) VALUES(${palavra},CURRENT_TIMESTAMP);`

        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json(resultado);
            }
        });
    }
}

module.exports = new Chatbot();
const conexao = require("../bancodedados/conexao");

function getAll(res) {
    const sql = "SELECT * FROM arquivos;";
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            res.status(400).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}

function add(nome, caminho, res) {

    const sql = `INSERT INTO arquivos(nome, caminho, atualizado_em, criado_em, deletado_em) VALUES("${nome}","${caminho}",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP, NULL);`;
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            res.status(400).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}

function erase(id, res) {

    const sql = `DELETE FROM arquivos WHERE id=${id}`;
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            res.status(400).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}

function edit(id, alt, res) {

    const sql = `UPDATE arquivos SET ${alt} WHERE id=${id}`;
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            res.status(400).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}
module.exports = { getAll, add, erase, edit}
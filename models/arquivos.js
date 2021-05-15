const conexao = require("../bancodedados/conexao");

function getAll(res) {
    const sql = "SELECT * FROM arquivos;";
    connection(sql, res);
}

function add(nome, caminho, res) {
    const sql = `INSERT INTO arquivos(nome, caminho, atualizado_em, criado_em, deletado_em) VALUES("${nome}","${caminho}",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP, NULL);`;
    connection(sql, res);
}

function erase(id, res) {
    const sql = `DELETE FROM arquivos WHERE id=${id};`;
    connection(sql, res);
}

function edit(id, nome,caminho, res) {
    const sql = `UPDATE arquivos SET nome="${nome}" , caminho="${caminho}", atualizado_em = CURRENT_TIMESTAMP WHERE id=${id};`;
    connection(sql, res);
}

function getOne(id, res) {
    const sql = `SELECT * FROM arquivos WHERE id=${id};`;
    connection(sql, res);    
}

function connection (sql, res){
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            res.status(400).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}

module.exports = { getAll, add, erase, edit, getOne}

const moment = require("moment");
const conexao = require("../bancodedados/conexao");

class Login {
  getAll(req, res) {
    const sql = `SELECT * FROM admins WHERE numero_identificacao = ${req.numId} AND senha = '${req.pass}'`;
    conexao.query(sql, (erro, resultado) => {
      if (erro) throw erro;
      console.log(resultado);
      if (resultado.length > 0) {
        res.send(true);
      } else {
        res.send(false);
      }
    });
  }
}

module.exports = new Login();

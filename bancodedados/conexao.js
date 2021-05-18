const mysql = require("mysql");

const conexao = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "sk8unidadederua2",
  database: "Chatbot",
});

module.exports = conexao;

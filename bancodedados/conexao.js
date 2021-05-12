const mysql = require("mysql");

const conexao = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Root@3675",
  database: "Chatbot",
});

module.exports = conexao;

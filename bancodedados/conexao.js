const mysql = require("mysql2");

const conexao = mysql.createConnection({
  host: "mysql743.umbler.com",
  user: "rootif",
  password: "chatbot3675",
  database: "chatbot",
});

module.exports = conexao;

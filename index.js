const customExpress = require("./config/customExpress");
const conexao = require("./bancodedados/conexao");
const Tabelas = require("./bancodedados/tabelas");

conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("conectado com o banco de dados");
  }
});

const app = customExpress();
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

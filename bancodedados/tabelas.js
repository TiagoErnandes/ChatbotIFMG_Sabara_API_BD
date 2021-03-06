class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    console.log("tabelas foram chamadas");
    this.criarTabelasChat();
  }
  criarTabelasChat() {
    const sql = `CREATE TABLE IF NOT EXISTS Admins(
            id bigint(20),
            atualizado_em timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
            criado_em timestamp DEFAULT CURRENT_TIMESTAMP,
            deletado_em timestamp DEFAULT NULL,
            nome varchar(191),
            numero_identificacao integer,
            senha varchar(191),
            primary key (id)
            );
            
            ALTER TABLE IF Admins MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;            
            CREATE TABLE IF NOT EXISTS Intencao(
            id bigint(20),
            atualizado_em timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
            criado_em timestamp DEFAULT CURRENT_TIMESTAMP,
            deletado_em timestamp DEFAULT NULL,
            nome varchar(191),
            primary key (id)
            );
            
            ALTER TABLE IF NOT EXISTS Intencao
              MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
            
            CREATE TABLE IF NOT EXISTS Palavras_Chave(
            id bigint(20),
            atualizado_em timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
            criado_em timestamp DEFAULT CURRENT_TIMESTAMP,
            deletado_em timestamp DEFAULT NULL,
            nome varchar(191),
            primary key (id)
            );
            
            ALTER TABLE Palavras_Chave
              MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
              
            
            CREATE TABLE IF NOT EXISTS Arquivos(
            id bigint(20),
            nome varchar(191),
            caminho varchar(191),
            atualizado_em timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
            criado_em timestamp DEFAULT CURRENT_TIMESTAMP,
            deletado_em timestamp DEFAULT NULL,
            primary key(id)
            );
            
            ALTER TABLE Arquivos
              MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
              
            CREATE TABLE IF NOT EXISTS Respostas(
            id bigint(20),
            atualizado_em timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
            criado_em timestamp DEFAULT CURRENT_TIMESTAMP,
            deletado_em timestamp DEFAULT NULL,
            texto_respostas text(5000),
            id_intencao bigint(20) UNSIGNED,
            id_PalavrasChave bigint(20) UNSIGNED,
            Arquivo_id bigint(20) UNSIGNED,
            foreign key (Arquivo_id) references Arquivos(id),
            foreign key (id_intencao) references Intencao(id),
            foreign key (id_PalavrasChave) references Palavras_Chave(id),
            primary key (id)
            );
            
            ALTER TABLE Respostas
              MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
              
            CREATE TABLE IF NOT EXISTS Mensagens(
            id bigint(20),
            ip integer,
            criado_em timestamp DEFAULT CURRENT_TIMESTAMP,
            Arquivo_id bigint(20) UNSIGNED,
            texto_Mensagens text(5000),
            primary key(id),
            foreign key (Arquivo_id) references Arquivos(id)
            );
            
            ALTER TABLE Mensagens
              MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
              
            CREATE TABLE Bot_mensagens(
            id bigint(20),
            id_Mensagens bigint(20) UNSIGNED,
            criado_em timestamp DEFAULT CURRENT_TIMESTAMP,
            primary key (id),
            foreign key (id_Mensagens) references Mensagens(id)
            );
            
            ALTER TABLE Bot_mensagens
              MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
              
            CREATE TABLE IF NOT EXISTS Log(
            id_Admins bigint(20) UNSIGNED,
            id_Intencao bigint(20) UNSIGNED,
            id_PalavrasChave bigint(20) UNSIGNED,
            foreign key(id_Admins) references Admins(id),
            foreign key(id_Intencao) references Intencao(id),
            foreign key(id_PalavrasChave) references Palavras_Chave(id)
            );
            
            
            CREATE TABLE IF NOT EXISTS Avaliacao(
            id bigint(20),
            Lido_em timestamp,
            Terminado_em timestamp,
            id_Mensagens bigint(20) UNSIGNED,
            foreign key (id_Mensagens) references Mensagens(id),
            primary key(id)
            );
            
            ALTER TABLE Avaliacao
              MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;`;
    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabelas chatboot criadas com sucesso.");
      }
    });
  }
}
module.exports = new Tabelas();

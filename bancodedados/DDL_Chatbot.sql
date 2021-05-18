CREATE DATABASE chatbot;
USE chatbot;


CREATE TABLE admins(
id bigint(20),
atualizado_em timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
criado_em timestamp DEFAULT CURRENT_TIMESTAMP,
deletado_em timestamp NULL DEFAULT NULL,
nome varchar(191),
numero_identificacao integer,
senha varchar(191),
primary key (id)
);

ALTER TABLE admins
  MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

CREATE TABLE intencao(
id bigint(20),
atualizado_em timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
criado_em timestamp DEFAULT CURRENT_TIMESTAMP,
deletado_em timestamp NULL DEFAULT NULL,
nome varchar(191),
primary key (id)
);

ALTER TABLE intencao
  MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

CREATE TABLE palavras_chave(
id bigint(20),
atualizado_em timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
criado_em timestamp DEFAULT CURRENT_TIMESTAMP,
deletado_em timestamp NULL DEFAULT NULL,
nome varchar(191),
primary key (id)
);

ALTER TABLE palavras_chave
  MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
  

CREATE TABLE arquivos(
id bigint(20),
nome varchar(191),
caminho varchar(191),
atualizado_em timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
criado_em timestamp DEFAULT CURRENT_TIMESTAMP,
deletado_em timestamp NULL DEFAULT NULL,
primary key(id)
);

ALTER TABLE arquivos
  MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
  
CREATE TABLE respostas(
id bigint(20),
atualizado_em timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
criado_em timestamp DEFAULT CURRENT_TIMESTAMP,
deletado_em timestamp NULL DEFAULT NULL,
texto_respostas text(5000),
id_intencao bigint(20) UNSIGNED,
id_PalavrasChave bigint(20) UNSIGNED,
Arquivo_id bigint(20) UNSIGNED,
foreign key (Arquivo_id) references arquivos(id),
foreign key (id_intencao) references intencao(id),
foreign key (id_PalavrasChave) references palavras_chave(id),
primary key (id)
);

ALTER TABLE respostas
  MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
  
CREATE TABLE mensagens(
id bigint(20),
ip integer,
criado_em timestamp DEFAULT CURRENT_TIMESTAMP,
Arquivo_id bigint(20) UNSIGNED,
texto_Mensagens text(5000),
primary key(id),
foreign key (Arquivo_id) references arquivos(id)
);

ALTER TABLE mensagens
  MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
  
CREATE TABLE bot_mensagens(
id bigint(20),
id_Mensagens bigint(20) UNSIGNED,
id_Respostas bigint(20) UNSIGNED,
criado_em timestamp DEFAULT CURRENT_TIMESTAMP,
primary key (id),
foreign key (id_Mensagens) references mensagens(id),
foreign key (id_Respostas) references respostas(id)
);

ALTER TABLE bot_mensagens
  MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
  
CREATE TABLE log(
id_Admins bigint(20) UNSIGNED,
id_Intencao bigint(20) UNSIGNED,
id_PalavrasChave bigint(20) UNSIGNED,
foreign key(id_Admins) references admins(id),
foreign key(id_Intencao) references intencao(id),
foreign key(id_PalavrasChave) references palavras_chave(id)
);


CREATE TABLE avaliacao(
id bigint(20),
Lido_em timestamp NULL DEFAULT NULL,
Terminado_em timestamp NULL DEFAULT NULL,
id_Mensagens bigint(20) UNSIGNED,
foreign key (id_Mensagens) references mensagens(id),
primary key(id)
);

ALTER TABLE avaliacao
  MODIFY id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
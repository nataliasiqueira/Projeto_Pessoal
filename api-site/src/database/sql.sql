-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para sql server - remoto - produção */

create table usuario (
	id int primary key auto_increment,
  nome varchar(45),
  email VARCHAR(50),
	senha VARCHAR(50)
) auto_increment = 10;

create table livros (
	idLivro int primary key auto_increment,
  nomeLivro varchar(60),
  autor varchar(60),
  genero varchar(30),
  totalPgs int,
  pgsLidas int,
  fkUsuario int,
  foreign key (fkUsuario) references usuario (id)
) auto_increment = 100;

CREATE TABLE aviso (
	id int primary key auto_increment,
	titulo varchar(100),
  descricao varchar(150),
	fk_usuario int,
	foreign key (fk_usuario) references usuario(id)
); 


/* para workbench - local - desenvolvimento */
create database EV;

use EV;

create table usuario (
	id int primary key auto_increment,
  nome varchar(45),
  email VARCHAR(50),
	senha VARCHAR(50)
) auto_increment = 10;

create table livros (
	idLivro int primary key auto_increment,
  nomeLivro varchar(60),
  autor varchar(60),
  genero varchar(30),
  totalPgs int,
  pgsLidas int,
  fkUsuario int,
  foreign key (fkUsuario) references usuario (id)
) auto_increment = 100;

CREATE TABLE aviso (
	id int primary key auto_increment,
	titulo varchar(100),
  descricao varchar(150),
	fk_usuario int,
	foreign key (fk_usuario) references usuario(id)
); 
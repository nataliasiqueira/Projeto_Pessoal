var database = require('../database/config')

function listar() {
  var instrucao = `
      SELECT l.*, u.id AS idUsuario, u.nome, u.email, u.senha FROM livros as l JOIN usuario as u ON l.fkUsuario = u.id WHERE u.id = ${idUsuario};
  `
  console.log('Executando a instrução SQL: \n' + instrucao)
  return database.executar(instrucao)
}

function cadastrar(nomeLivro, autor, genero, totalPgs, pgsLidas, idUsuario) {
  var instrucao = `
      INSERT INTO livros (nomeLivro, autor, genero, totalPgs, pgsLidas, fkUsuario) VALUES ('${nomeLivro}' , '${autor}', '${genero}', ${totalPgs}, ${pgsLidas}, ${idUsuario});
  `
  console.log('Executando a instrução SQL: \n' + instrucao)
  return database.executar(instrucao)
}

module.exports = {
  cadastrar,
  listar
}

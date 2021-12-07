var database = require("../database/config");

function buscarUltimasMedidas(nomeLivro, pgsLidas) {
    instrucaoSql = `
        select l.nomeLivro, l.pgsLidas, l.totalPgs from livros as l join usuario as u on l.fkUsuario = u.id where u.id = 13`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
}
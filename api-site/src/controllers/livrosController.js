var livrosModel = require('../models/livrosModel')

function listar(req, res) {
  var idUsuario = req.params.idUsuario;

  livrosModel.listar(idUsuario)
    .then(
      function (resultado) {
      // precisamos informar que o resultado voltará para o front-end como uma resposta em json
      res.status(200).json(resultado)
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage)
    })
}

function cadastrar(req, res) {
  var nomeLivro = req.body.nomeLivro;
  var autor = req.body.autor;
  var genero = req.body.genero;
  var totalPgs = req.body.totalPgs;
  var pgsLidas = req.body.pgsLidas;
  var idUsuario = req.params.idUsuario;

  if (nomeLivro == undefined) {
    res.status(400).send('Seu nome está indefinido!')
  } else if (autor == undefined) {
    res.status(400).send('Seu autor está indefinido!')
  } else if (genero == undefined) {
    res.status(400).send('Seu gênero está indefinido!')
  } else if (totalPgs == undefined) {
    res.status(400).send('Total de páginas está indefinido!')
  } else if (pgsLidas == undefined) {
    res.status(400).send('Total de páginas lidas está indefinido!')
  } else if (idUsuario == undefined) {
    res.status(403).send("O id do usuário está indefinido!"); 
  } else {
    livrosModel.cadastrar(nomeLivro, autor, genero, totalPgs, pgsLidas, idUsuario,)
      .then(function (resposta) {
        res.status(200).send('Livro criado com sucesso')
      })
      .catch(function (erro) {
        console.log(erro)
        console.log(
          '\nHouve um erro ao realizar o cadastro! Erro: ',
          erro.sqlMessage
        )
        res.status(500).json(erro.sqlMessage)
      })
  }
}

module.exports = {
  listar,
  cadastrar
}

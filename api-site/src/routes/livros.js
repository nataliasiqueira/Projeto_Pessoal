var express = require('express')
var router = express.Router()

var livrosController = require('../controllers/livrosController')

router.post('/cadastrar/:idUsuario', function (req, res) {
  // função a ser chamada quando acessar /livros/cadastrar
  livrosController.cadastrar(req, res)
})

router.get('/listar', function (req, res) {
  // função a ser chamada quando acessar /livros/listar
  livrosController.listar(req, res)
})

module.exports = router

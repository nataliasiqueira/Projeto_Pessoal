/*FUNÇÃO CALCULADORA*/

function calcular_leitura() {

  var nomeLivroVar = input_livro_atual.value;
  var totalPgsVar = input_qtd_pgs.value;
  var qtdPgsDiaVar = input_qtd_pgs_dia.value;
  var notaLivroVar = lista_avaliacao.value;
  var terminarLivroVar = totalPgsVar / qtdPgsDiaVar;
  var livroAnoVar = 365 / terminarLivroVar;

  if (nomeLivroVar == '') {
    alert('Informe o nome do livro!')
  } else if (totalPgsVar <= 0) {
    alert('Informe a quantidade de páginas!')
  } else if (qtdPgsDiaVar <= 0) {
    alert('Informe a quantidade de páginas que você lê por dia!')
  } else if (notaLivroVar == 0) {
    alert('Dê uma nota para o livro')
  } else {
    div_resultado_calculadora.innerHTML = `O livro ${nomeLivroVar} tem ${totalPgsVar} páginas e sua nota foi ${notaLivroVar}.
    <br> 
    Se você lê em média ${qtdPgsDiaVar} páginas por dia, você consegue terminar esse livro em ${terminarLivroVar.toFixed(
      0
    )} dias!
    <br>
    Agora, imagine manter este ritmo de leitura diariamente... Você pode ler pelo menos ${livroAnoVar.toFixed(
      0
    )} livros por ano!
    <br>`

    div_resultado_calculadora.style.display = 'block'
  }

  if (qtdPgsDiaVar < 5) {
    div_resultado_calculadora.innerHTML += `<br>Que tal criar o hábito de ler um pouco todos os dias? <br>
    <b>Cadastre-se em nosso site e acompanhe seu ritmo de leitura!</b>`
  } else if (qtdPgsDiaVar > 5 && qtdPgsDiaVar < 10) {
    div_resultado_calculadora.innerHTML += `<br>Você é um leitor promissor! <br>
    <b>Cadastre-se em nosso site e acompanhe seu ritmo de leitura!</b>`
  } else {
    div_resultado_calculadora.innerHTML += `<br>Parabéns! Você é um leitor nato! <br>
    <b>Cadastre-se em nosso site e acompanhe seu ritmo de leitura!</b>`
  }
}

/*FUNÇÃO INDICAÇÃO ALEATÓRIA*/

function indicacao_aleatoria() {
  //numero_aleatorio 'e minha tag p
  document.getElementById('numero_aleatorio').innerHTML = Math.floor(Math.random() * 5) + 1;

   /*if(numero_aleatorio.innerHTML == 1) {
      div_resultado_indicacao.innerHTML = `<img src="https://images-na.ssl-images-amazon.com/images/I/91eXvRufnFL.jpg"> <br>
      <b style="margin-left: 10px"> A Cabana - William P. Young </b>`;
    } else if (numero_aleatorio.innerHTML == 2) {
      div_resultado_indicacao.innerHTML = `<img src="https://m.media-amazon.com/images/I/41i4T1yAnSS._SY346_.jpg"> <br>
      <b style="margin-left: 10px"> A vida invisível de Addie LaRue - Schwab, V. E. </b>`;
    } else*/ if (numero_aleatorio.innerHTML == 3) {
      div_resultado_indicacao.innerHTML = `<img style="margin: 10px" src="https://m.media-amazon.com/images/I/51tgirqiZgL._SY346_.jpg"> <br>
      <b style="margin-top: 50px"> Além do bem e do mal - Friedrich Nietzsche </b>`;
    } /*else if (numero_aleatorio.innerHTML == 4) {
      div_resultado_indicacao.innerHTML = `<img src="https://m.media-amazon.com/images/I/51MxQcdlS-L._SY346_.jpg"> <br>
      <b style="margin-left: 10px"> Os Sertões - Euclides da Cunha </b>`;
    } else if (numero_aleatorio.innerHTML == 5) {
      div_resultado_indicacao.innerHTML = `<img src="https://m.media-amazon.com/images/I/51hyv6MePHL._SY346_.jpg"> <br>
      <b style="margin-left: 10px"> Um estranho no ninho - Ken Kesey </b>`;
    }*/
}

// sessão
function validarSessao() {
  // aguardar();

  var email = sessionStorage.EMAIL_USUARIO
  var nome = sessionStorage.NOME_USUARIO

  var h1LoginUsuario = document.getElementById('h1_login_usuario')

  if (email != null && nome != null) {
    // window.alert(`Seja bem-vindo, ${nome}!`);
    if (h1LoginUsuario != undefined) {
      h1LoginUsuario.innerHTML = email
    }
    b_usuario.innerHTML = nome

    // finalizarAguardar();
  } else {
    window.location = '../login.html'
  }
}

function limparSessao() {
  //aguardar();
  sessionStorage.clear()
  // finalizarAguardar();
  window.location = '../login.html'
}

// carregamento (loading)
function aguardar() {
  var divAguardar = document.getElementById('div_aguardar')
  divAguardar.style.display = 'flex'
}

function finalizarAguardar(texto) {
  var divAguardar = document.getElementById('div_aguardar')
  divAguardar.style.display = 'none'

  var divErrosLogin = document.getElementById('div_erros_login')
  if (texto) {
    divErrosLogin.innerHTML = texto
  }
}

// modal
function mostrarModal() {
  var divModal = document.getElementById('div_modal')
  divModal.style.display = 'flex'
}

function fecharModal() {
  var divModal = document.getElementById('div_modal')
  divModal.style.display = 'none'
}

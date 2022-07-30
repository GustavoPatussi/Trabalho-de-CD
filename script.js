function menuDisplay() {
  const lateral = document.getElementById('menu_lateral');
  if (lateral.style.visibility == '') {
    lateral.style.visibility = 'visible';
  } else if (lateral.style.visibility == 'hidden') {
    lateral.style.visibility = 'visible';
  } else {
    lateral.style.visibility = 'hidden';
  }
}

function menuDisplay2() {
  const lateral = document.getElementById('menu_lateral');
  if (lateral.style.visibility == 'visible') {
    lateral.style.visibility = 'hidden';
  }
}

function loadConteudo(elemento) {
  var divConteudo = document.getElementById('Conteudo');
  divConteudo.innerHTML = '';
  var txtTitulo = document.createElement('h1');
  txtTitulo.setAttribute('class', 'titulo');
  txtTitulo.innerText = elemento.titulo;
  
  divConteudo.appendChild(txtTitulo);
}

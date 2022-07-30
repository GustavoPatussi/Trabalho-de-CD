const conteudo = [
  {
    titulo: 'cultura Digital',
  },
];

function Menuzain() {
  const lateral = document.getElementById('menu_lateral');
  if (lateral.style.visibility == '') {
    lateral.style.visibility = 'visible';
  } else if (lateral.style.visibility == 'hidden') {
    lateral.style.visibility = 'visible';
  } else {
    lateral.style.visibility = 'hidden';
  }
}
function Menuzain2() {
  const lateral = document.getElementById('menu_lateral');
  if (lateral.style.visibility == 'visible') {
    lateral.style.visibility = 'hidden';
  }
}
function LoadConteudo() {
  var divConteudo = document.getElementById('conteudo');
}

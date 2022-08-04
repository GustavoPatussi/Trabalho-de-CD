const conteudo = [
  {
    titulo: 'cultura Digital',
    resumo: '',
    links: [
      {
        l: 'https://cdn.jsdelivr.net/gh/GustavoPatussi/Trabalho-de-CD@main/Contents/SistemasOperacionais.pdf',
        n: 'sistemas Operacionais',
      },
    ],
  },
  {
    titulo: 'Matemática',
    resumo: '',
  },
  {
    titulo: 'Língua Portuguesa',
    resumo: '',
  },
  {
    titulo: 'Geografia',
    resumo: '',
  },
  {
    titulo: 'História',
    resumo: '',
  },
  {
    titulo: 'Física',
    resumo: '',
  },
  {
    titulo: 'Química',
    resumo: '',
  },
  {
    titulo: 'Redes e Protocolos',
    resumo: '',
  },
];

function checkDisciplina(i) {
  loadConteudo(conteudo[i]);
}

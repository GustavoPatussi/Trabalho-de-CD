const conteudo = [
  {
    titulo: 'cultura Digital',
    resumo: '',
    links: [
      {
        l: 'https://cdn.jsdelivr.net/gh/GustavoPatussi/Trabalho-de-CD@main/Contents/AULA%2002%20-%20SISTEMAS%20OPERACIONAIS.pdf',
        n: 'sistemas Operacionais (PDF)',
      },
    ],
  },
  {
    titulo: 'Matemática',
    resumo: 'A matemática estuda quantidades, medidas, espaços, estruturas e variações. Um trabalho matemático consiste em procurar por padrões, formular conjecturas e, por meio de deduções rigorosas a partir de axiomas e definições, estabelecer novos resultados.',
  },
  {
    titulo: 'Língua Portuguesa',
    resumo: 'Dentre as áreas mais importantes da disciplina, estão: morfologia, que estuda as palavras isoladamente; sintaxe, responsável por estudar as palavras enquanto elementos de uma frase; e semântica, que estuda o significado das palavras e os sentidos que elas podem tomar de acordo com o contexto.',
    links: [
      {
        l: 'https://www.diferenca.com/ditongo-tritongo-e-hiato-encontros-vocalicos/#:~:text=O%20ditongo%20ocorre%20quando%20se,duas%20vogais%20em%20s%C3%ADlabas%20diferentes.',
        n: 'Ditongo, Tritongo e Hiato (web)',
      },
    ],
  },
  {
    titulo: 'Geografia',
    resumo: 'A Geografia é a ciência que estuda elementos físicos, biológicos e humanos, e suas relações com o planeta Terra. Tem como principal objetivo compreender a relação do homem com o meio ambiente, as condições climáticas e as características do espaço geográfico.',
  },
  {
    titulo: 'História',
    resumo: 'É chamado de história o conhecimento que estuda as ocorrências do passado. Os historiadores definem essa ciência de alguns modos distintos. Há uma linha de pensamento que acredita que a história estuda, na realidade, a ação dos seres humanos através do tempo, investigando seus comportamentos e suas consequências.',
  },
  {
    titulo: 'Física',
    resumo: 'Física (do grego antigo: φύσις physis "natureza") é a ciência que estuda a natureza e seus fenômenos em seus aspectos mais gerais. Analisa suas relações e propriedades, além de descrever e explicar a maior parte de suas consequências.',
    links: [
      {
        l: 'https://cdn.jsdelivr.net/gh/GustavoPatussi/Trabalho-de-CD@main/Contents/Usinas_2a%20serie%20(1).pdf',
        n: 'Usinas (PDF)',
      },
    ],
  },
  {
    titulo: 'Química',
    resumo: 'A química geral engloba as diferentes áreas do estudo dos compostos químicos, moléculas e substâncias, seja em um nível macroscópico ou microscópico, em termos de composição dos átomos, da mistura de substâncias diferentes, arranjo dos elementos químicos ou outros temas.',
  },
  {
    titulo: 'Redes e Protocolos',
    resumo: 'Redes de Computadores refere-se a interconexão por meio de um sistema de comunicação baseado em transmissões e protocolos de vários computadores com o objetivo de trocar informações, além de outros recursos. Essa conexão é chamada de estações de trabalho (nós, pontos ou dispositivos de rede).',
  },
];

function checkDisciplina(i) {
  loadConteudo(conteudo[i]);
}

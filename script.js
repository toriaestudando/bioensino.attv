/* =============================================
   BIOVIVA — PLATAFORMA DE ESTUDOS DE BIOLOGIA
   ============================================= */

/* =============================================
   1. CONTEÚDOS DE BIOLOGIA
   ============================================= */

const topics = [
  {
    id: 'celula',
    title: 'Biologia celular',
    category: 'Vida',
    icon: '🔬',
    tone: 'blue',
    related: 'Citologia',
    desc: 'Conheça a unidade básica dos seres vivos.',
    time: '6 min',
    body: `
      <p>A <strong>célula</strong> é a unidade estrutural e funcional dos seres vivos. Organismos podem ser unicelulares, formados por uma célula, ou pluricelulares, formados por muitas células.</p>

      <h3>Conceitos essenciais</h3>
      <ul>
        <li><strong>Membrana plasmática:</strong> controla a entrada e a saída de substâncias.</li>
        <li><strong>Citoplasma:</strong> região onde ficam as organelas e ocorrem diversas reações.</li>
        <li><strong>Núcleo:</strong> abriga o DNA nas células eucarióticas.</li>
        <li><strong>Mitocôndrias:</strong> participam da respiração celular e da produção de ATP.</li>
      </ul>

      <h3>Para lembrar</h3>
      <p>Procariontes não possuem núcleo delimitado por membrana. Eucariontes possuem núcleo organizado e organelas membranosas.</p>
    `
  },
  {
    id: 'genetica',
    title: 'Genética',
    category: 'Vida',
    icon: '🧬',
    tone: 'yellow',
    related: 'Genética',
    desc: 'Entenda DNA, genes e hereditariedade.',
    time: '8 min',
    body: `
      <p>A <strong>Genética</strong> estuda como as características são transmitidas entre gerações e como a informação genética funciona.</p>

      <h3>Conceitos essenciais</h3>
      <ul>
        <li><strong>DNA:</strong> molécula que armazena informação genética.</li>
        <li><strong>Gene:</strong> trecho de DNA relacionado a um produto funcional.</li>
        <li><strong>Alelo:</strong> versão de um gene.</li>
        <li><strong>Genótipo:</strong> conjunto de variantes genéticas consideradas.</li>
        <li><strong>Fenótipo:</strong> características observáveis, influenciadas por genes e ambiente.</li>
      </ul>

      <h3>Lei de Mendel</h3>
      <p>Na segregação dos alelos, os dois alelos de um gene se separam na formação dos gametas. Em um cruzamento Aa × Aa, sob dominância completa e demais condições mendelianas, a proporção genotípica esperada é 1 AA : 2 Aa : 1 aa.</p>
    `
  },
  {
    id: 'ecologia',
    title: 'Ecologia',
    category: 'Ambiente',
    icon: '🌿',
    tone: 'blue',
    related: 'Ecologia',
    desc: 'Explore relações entre organismos e ambiente.',
    time: '7 min',
    body: `
      <p>A <strong>Ecologia</strong> estuda as relações dos seres vivos entre si e com os fatores físicos e químicos do ambiente.</p>

      <h3>Níveis de organização</h3>
      <ul>
        <li><strong>População:</strong> indivíduos da mesma espécie em uma área.</li>
        <li><strong>Comunidade:</strong> conjunto de populações que interagem.</li>
        <li><strong>Ecossistema:</strong> comunidade e fatores abióticos em interação.</li>
        <li><strong>Biosfera:</strong> conjunto das regiões da Terra onde existe vida.</li>
      </ul>

      <h3>Cadeias alimentares</h3>
      <p>Produtores transformam energia em matéria orgânica; consumidores obtêm matéria e energia ao se alimentar; decompositores reciclam nutrientes. A energia flui pelo ecossistema, enquanto a matéria circula.</p>
    `
  },
  {
    id: 'corpo',
    title: 'Corpo humano',
    category: 'Corpo humano',
    icon: '🫀',
    tone: 'yellow',
    related: 'Corpo humano',
    desc: 'Veja como os sistemas do corpo trabalham juntos.',
    time: '9 min',
    body: `
      <p>O corpo humano é formado por sistemas que atuam de forma integrada para manter a <strong>homeostase</strong>, isto é, condições internas relativamente estáveis.</p>

      <h3>Sistemas importantes</h3>
      <ul>
        <li><strong>Digestório:</strong> transforma alimentos e absorve nutrientes.</li>
        <li><strong>Respiratório:</strong> realiza trocas gasosas, captando oxigênio e eliminando gás carbônico.</li>
        <li><strong>Circulatório:</strong> transporta gases, nutrientes, hormônios e resíduos.</li>
        <li><strong>Nervoso e endócrino:</strong> coordenam respostas e regulam funções corporais.</li>
      </ul>

      <h3>Saúde em foco</h3>
      <p>Alimentação variada, atividade física, sono e vacinação contribuem para a saúde, junto a condições sociais, ambientais e acesso aos serviços de saúde.</p>
    `
  },
  {
    id: 'evolucao',
    title: 'Evolução',
    category: 'Vida',
    icon: '🦋',
    tone: 'blue',
    related: null,
    desc: 'Compreenda a diversidade e as mudanças das espécies.',
    time: '7 min',
    body: `
      <p>A <strong>evolução biológica</strong> é a mudança das características hereditárias das populações ao longo das gerações.</p>

      <h3>Mecanismos evolutivos</h3>
      <ul>
        <li><strong>Seleção natural:</strong> variantes hereditárias que favorecem a reprodução tendem a se tornar mais comuns em certas condições.</li>
        <li><strong>Mutação:</strong> fonte de novas variantes genéticas.</li>
        <li><strong>Deriva genética:</strong> mudanças aleatórias nas frequências dos alelos.</li>
        <li><strong>Fluxo gênico:</strong> movimento de alelos entre populações.</li>
      </ul>

      <h3>Importante</h3>
      <p>Indivíduos não evoluem porque “precisam”; as populações mudam ao longo das gerações. A evolução não tem um objetivo predeterminado.</p>
    `
  },
  {
    id: 'ambiente',
    title: 'Meio ambiente',
    category: 'Ambiente',
    icon: '🌎',
    tone: 'yellow',
    related: 'Meio ambiente',
    desc: 'Biodiversidade, impactos ambientais e conservação.',
    time: '8 min',
    body: `
      <p>O meio ambiente reúne componentes naturais e suas interações. A <strong>biodiversidade</strong> inclui diversidade genética, de espécies e de ecossistemas.</p>

      <h3>Impactos e conservação</h3>
      <ul>
        <li><strong>Desmatamento:</strong> pode fragmentar habitats e reduzir a biodiversidade.</li>
        <li><strong>Poluição:</strong> altera a qualidade do ar, da água e do solo.</li>
        <li><strong>Mudanças climáticas:</strong> afetam ecossistemas, saúde e disponibilidade de recursos.</li>
        <li><strong>Conservação:</strong> envolve áreas protegidas, restauração, uso sustentável e participação social.</li>
      </ul>

      <h3>Consumo consciente</h3>
      <p>Reduzir desperdícios, reutilizar materiais e cobrar políticas públicas são ações complementares. Problemas ambientais exigem também soluções coletivas e estruturais.</p>
    `
  }
];


/* =============================================
   2. FLASHCARDS
   ============================================= */

const flashcards = [
  {
    category: 'ECOLOGIA',
    q: 'O que é um ecossistema?',
    a: 'É o conjunto de seres vivos e fatores não vivos que interagem em determinada área.'
  },
  {
    category: 'CITOLOGIA',
    q: 'Qual é a função da membrana plasmática?',
    a: 'Controlar seletivamente a entrada e a saída de substâncias da célula.'
  },
  {
    category: 'GENÉTICA',
    q: 'O que é um gene?',
    a: 'É um trecho de DNA que contém informação para produzir um produto funcional, como um RNA ou uma proteína.'
  },
  {
    category: 'CORPO HUMANO',
    q: 'Onde ocorre a maior parte da absorção de nutrientes?',
    a: 'No intestino delgado, graças à sua grande superfície de absorção.'
  },
  {
    category: 'EVOLUÇÃO',
    q: 'O que é seleção natural?',
    a: 'É o processo pelo qual variantes hereditárias associadas a maior sucesso reprodutivo tendem a se tornar mais frequentes.'
  },
  {
    category: 'BOTÂNICA',
    q: 'Qual é o papel da fotossíntese?',
    a: 'Converter energia luminosa em energia química, produzindo matéria orgânica a partir de água e dióxido de carbono.'
  },
  {
    category: 'IMUNOLOGIA',
    q: 'Qual é a função dos anticorpos?',
    a: 'Reconhecer antígenos específicos e ajudar o sistema imune a neutralizar ou eliminar agentes estranhos.'
  },
  {
    category: 'AMBIENTE',
    q: 'O que significa biodiversidade?',
    a: 'É a variedade da vida, incluindo diversidade genética, de espécies e de ecossistemas.'
  }
];


/* =============================================
   3. QUESTÕES E GABARITOS
   ============================================= */

const questions = [
  {
    id: 'produtores-cadeia-alimentar',
    topic: 'Ecologia',
    q: 'Em uma cadeia alimentar, qual grupo transforma matéria inorgânica em matéria orgânica usando energia luminosa ou química?',
    options: [
      'Consumidores primários',
      'Decompositores',
      'Produtores',
      'Predadores de topo'
    ],
    correct: 2,
    explanation: 'Produtores, como plantas e algas, são organismos autotróficos. Na fotossíntese, usam energia luminosa para produzir matéria orgânica; alguns microrganismos utilizam energia química.'
  },
  {
    id: 'mitocondria-atp',
    topic: 'Citologia',
    q: 'Qual organela está diretamente associada à produção de grande parte do ATP na respiração celular aeróbia?',
    options: [
      'Lisossomo',
      'Mitocôndria',
      'Complexo golgiense',
      'Ribossomo'
    ],
    correct: 1,
    explanation: 'As mitocôndrias realizam etapas fundamentais da respiração celular aeróbia e produzem grande parte do ATP utilizado pela célula.'
  },
  {
    id: 'genotipo-aa',
    topic: 'Genética',
    q: 'Um indivíduo com genótipo Aa é considerado:',
    options: [
      'Homozigoto dominante',
      'Homozigoto recessivo',
      'Heterozigoto',
      'Sem alelos para essa característica'
    ],
    correct: 2,
    explanation: 'Heterozigoto é o indivíduo que possui dois alelos diferentes para determinado gene, como A e a.'
  },
  {
    id: 'hemacias-oxigenio',
    topic: 'Corpo humano',
    q: 'Qual é uma das principais funções das hemácias?',
    options: [
      'Produzir bile',
      'Transportar oxigênio',
      'Filtrar a urina',
      'Secretar insulina'
    ],
    correct: 1,
    explanation: 'As hemácias contêm hemoglobina, proteína que se liga ao oxigênio e contribui para seu transporte pelo sangue.'
  },
  {
    id: 'residuos-aterros',
    topic: 'Meio ambiente',
    q: 'Qual ação contribui diretamente para diminuir a quantidade de resíduos enviados a aterros?',
    options: [
      'Descartar recicláveis no lixo comum',
      'Queimar resíduos domésticos',
      'Reutilizar materiais e separar recicláveis',
      'Aumentar o uso de produtos descartáveis'
    ],
    correct: 2,
    explanation: 'Reutilização e coleta seletiva podem reduzir o descarte e permitir que materiais sejam reciclados. A eficácia depende também de sistemas adequados de coleta e tratamento.'
  }
];


/* =============================================
   4. TEMAS PARA REDAÇÃO
   ============================================= */

const essays = {
  saude: [
    {
      title: 'Desinformação e vacinação no Brasil',
      desc: 'Discuta como a circulação de informações falsas pode afetar a adesão à vacinação e a saúde coletiva.',
      support: 'Você pode abordar educação científica, confiança nas instituições de saúde, comunicação pública acessível e estratégias de combate à desinformação.'
    },
    {
      title: 'Desafios para a promoção da saúde mental entre jovens',
      desc: 'Reflita sobre fatores sociais, escolares e digitais que influenciam o bem-estar de adolescentes e jovens.',
      support: 'Considere acolhimento nas escolas, acesso a serviços de saúde, prevenção, redução do estigma e uso responsável das plataformas digitais.'
    },
    {
      title: 'Desigualdade no acesso ao saneamento básico',
      desc: 'Analise as consequências da falta de água tratada e esgotamento sanitário para a saúde da população.',
      support: 'Relacione saneamento, prevenção de doenças, desigualdade socioespacial, investimento público e participação comunitária.'
    },
    {
      title: 'Alimentação saudável e segurança alimentar',
      desc: 'Discuta os obstáculos para garantir alimentação adequada e nutritiva à população brasileira.',
      support: 'Explore renda, acesso a alimentos frescos, educação alimentar, publicidade e políticas de segurança alimentar.'
    }
  ],

  ambiente: [
    {
      title: 'Caminhos para combater o desmatamento',
      desc: 'Discuta medidas para conciliar a proteção das florestas com as necessidades sociais e econômicas.',
      support: 'Você pode discutir fiscalização, restauração ecológica, valorização de comunidades locais, produção sustentável e rastreabilidade.'
    },
    {
      title: 'O desafio da gestão de resíduos sólidos',
      desc: 'Analise como consumo, descarte e políticas públicas influenciam a poluição por resíduos.',
      support: 'Aborde redução do consumo, reutilização, coleta seletiva, logística reversa, educação ambiental e responsabilidade compartilhada.'
    },
    {
      title: 'Mudanças climáticas e vulnerabilidade social',
      desc: 'Reflita sobre os impactos de eventos extremos e por que seus efeitos atingem grupos de maneira desigual.',
      support: 'Considere prevenção de desastres, moradia segura, infraestrutura urbana, sistemas de alerta, adaptação climática e justiça ambiental.'
    },
    {
      title: 'Preservação da biodiversidade brasileira',
      desc: 'Discuta a importância da biodiversidade e os desafios para sua conservação.',
      support: 'Explore perda de habitat, espécies invasoras, unidades de conservação, pesquisa científica e uso sustentável dos recursos naturais.'
    }
  ]
};


/* =============================================
   5. ELEMENTOS E VARIÁVEIS
   ============================================= */

const STORAGE_KEY = 'bioviva-progress-v2';
const LEGACY_STORAGE_KEY = 'bioviva-answered';

const el = {
  topicGrid: document.getElementById('topicGrid'),
  contentSearch: document.getElementById('contentSearch'),
  contentEmpty: document.getElementById('contentEmpty'),
  contentFilters: document.getElementById('contentFilters'),
  clearFilters: document.getElementById('clearFilters'),
  flashcard: document.getElementById('flashcard'),
  flashCategory: document.getElementById('flashCategory'),
  flashQuestion: document.getElementById('flashQuestion'),
  flashAnswer: document.getElementById('flashAnswer'),
  flipHint: document.getElementById('flipHint'),
  flipCard: document.getElementById('flipCard'),
  prevCard: document.getElementById('prevCard'),
  nextCard: document.getElementById('nextCard'),
  flashCount: document.getElementById('flashCount'),
  flashProgressBar: document.getElementById('flashProgressBar'),
  questionList: document.getElementById('questionList'),
  quizScore: document.getElementById('quizScore'),
  scoreBar: document.getElementById('scoreBar'),
  scoreDetail: document.getElementById('scoreDetail'),
  statAnswered: document.getElementById('statAnswered'),
  statTopics: document.getElementById('statTopics'),
  statCards: document.getElementById('statCards'),
  statEssays: document.getElementById('statEssays'),
  resetQuiz: document.getElementById('resetQuiz'),
  essayPanel: document.getElementById('essayPanel'),
  essayTabs: document.getElementById('essayTabs'),
  menuToggle: document.getElementById('menuToggle'),
  navMenu: document.getElementById('navMenu'),
  topicDialog: document.getElementById('topicDialog'),
  dialogIcon: document.getElementById('dialogIcon'),
  dialogCategory: document.getElementById('dialogCategory'),
  dialogTitle: document.getElementById('dialogTitle'),
  dialogBody: document.getElementById('dialogBody'),
  dialogStudy: document.getElementById('dialogStudy')
};

let activeFilter = 'Todos';
let currentFlash = 0;
let currentEssay = 'saude';
let activeTopic = null;
let answered = {};


/* =============================================
   6. UTILITÁRIOS
   ============================================= */

/**
 * Normaliza um texto para busca: minúsculas e sem acentos,
 * para que "genetica" encontre "Genética".
 */
function normalize(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, ''); // remove os acentos
}

/** Remove marcações HTML de um texto. */
function stripTags(value) {
  const holder = document.createElement('div');
  holder.innerHTML = value;
  return holder.textContent || '';
}

/** Rola a página até um elemento respeitando a altura do cabeçalho fixo. */
function scrollToElement(element, block = 'center') {
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.pageYOffset;
  const offset = 100;

  window.scrollTo({
    top: Math.max(0, top - offset),
    behavior: 'smooth'
  });
}


/* =============================================
   7. PERSISTÊNCIA DO PROGRESSO
   ============================================= */

/**
 * Lê o progresso salvo, descartando respostas inválidas
 * (pergunta desconhecida ou alternativa fora do range).
 */
function loadProgress() {
  let saved = null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (raw) {
      saved = JSON.parse(raw);
    } else {
      // Migração do formato antigo, que usava o índice da questão como chave.
      const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);

      if (legacy) {
        const parsed = JSON.parse(legacy);

        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          const migrated = {};

          questions.forEach((question, index) => {
            const value = parsed[index];

            if (Number.isInteger(value)) {
              migrated[question.id] = value;
            }
          });

          saved = migrated;
        }
      }
    }
  } catch (error) {
    console.warn('Não foi possível ler o progresso salvo.');
    return {};
  }

  if (!saved || typeof saved !== 'object' || Array.isArray(saved)) {
    return {};
  }

  const valid = {};

  questions.forEach(question => {
    const value = saved[question.id];

    if (
      Number.isInteger(value) &&
      value >= 0 &&
      value < question.options.length
    ) {
      valid[question.id] = value;
    }
  });

  return valid;
}


/** Salva o progresso atual no navegador. */
function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answered));
  } catch (error) {
    console.warn('Não foi possível salvar o progresso no navegador.');
  }
}


/* =============================================
   8. MOSTRAR E FILTRAR CONTEÚDOS
   ============================================= */

function renderTopics() {
  const query = normalize(el.contentSearch.value.trim());

  const filtered = topics.filter(topic => {
    const matchesCategory =
      activeFilter === 'Todos' ||
      topic.category === activeFilter;

    const searchableText = normalize(
      `${topic.title} ${topic.desc} ${topic.category} ${stripTags(topic.body)}`
    );

    return matchesCategory && searchableText.includes(query);
  });

  el.topicGrid.innerHTML = filtered.map(topic => `
    <article class="topic-card${topic.tone === 'yellow' ? ' tone-yellow' : ''}">
      <div class="topic-top">
        <span class="topic-icon" aria-hidden="true">${topic.icon}</span>
        <span class="topic-tag">${topic.category} · ${topic.time}</span>
      </div>

      <h3>${topic.title}</h3>
      <p>${topic.desc}</p>

      <button type="button" class="topic-open" data-topic="${topic.id}">
        Ler resumo <span aria-hidden="true">↗</span>
      </button>
    </article>
  `).join('');

  el.contentEmpty.classList.toggle('hidden', filtered.length !== 0);
}


// Filtrar por categoria
el.contentFilters.addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');

  if (!button) return;

  activeFilter = button.dataset.filter;

  el.contentFilters.querySelectorAll('.filter-pill').forEach(item => {
    const isActive = item === button;

    item.classList.toggle('active', isActive);
    item.setAttribute('aria-pressed', String(isActive));
  });

  renderTopics();
});


// Pesquisar conteúdo
el.contentSearch.addEventListener('input', renderTopics);


// Limpar busca e filtros quando nenhum conteúdo é encontrado
el.clearFilters.addEventListener('click', () => {
  el.contentSearch.value = '';
  activeFilter = 'Todos';

  el.contentFilters.querySelectorAll('.filter-pill').forEach(item => {
    const isActive = item.dataset.filter === 'Todos';

    item.classList.toggle('active', isActive);
    item.setAttribute('aria-pressed', String(isActive));
  });

  renderTopics();
  el.contentSearch.focus();
});


// Abrir resumo de um conteúdo
el.topicGrid.addEventListener('click', event => {
  const button = event.target.closest('[data-topic]');

  if (!button) return;

  const topic = topics.find(item => item.id === button.dataset.topic);

  if (!topic) return;

  activeTopic = topic;

  el.dialogIcon.textContent = topic.icon;
  el.dialogCategory.textContent = topic.category.toUpperCase();
  el.dialogTitle.textContent = topic.title;
  el.dialogBody.innerHTML = topic.body;

  if (!el.topicDialog.open) {
    el.topicDialog.showModal();
  }
});


// Levar o usuário até a questão relacionada ao conteúdo aberto
el.dialogStudy.addEventListener('click', () => {
  const related = activeTopic ? activeTopic.related : null;

  const index = related
    ? questions.findIndex(question => question.topic === related)
    : -1;

  el.topicDialog.close();

  if (index === -1) {
    document.getElementById('questoes').scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const card = el.questionList.querySelector(`[data-question="${index}"]`);

  scrollToElement(card);

  el.questionList.querySelectorAll('.question-card').forEach(item => {
    item.classList.remove('is-highlight');
  });

  if (card) {
    card.classList.add('is-highlight');
    setTimeout(() => card.classList.remove('is-highlight'), 2600);
  }
});


// Fechar o modal ao clicar fora dele
el.topicDialog.addEventListener('click', event => {
  if (event.target === el.topicDialog) {
    el.topicDialog.close();
  }
});


/* =============================================
   9. FUNCIONALIDADES DOS FLASHCARDS
   ============================================= */

function renderFlash() {
  const flashcard = flashcards[currentFlash];

  el.flashCategory.textContent = flashcard.category;
  el.flashQuestion.textContent = flashcard.q;
  el.flashAnswer.textContent = flashcard.a;

  // Começa mostrando a pergunta
  el.flashAnswer.classList.add('hidden');
  el.flashQuestion.classList.remove('hidden');

  el.flipHint.innerHTML =
    'Clique no cartão para virar <span aria-hidden="true">↻</span>';

  el.flipCard.textContent = 'Ver resposta ↻';

  el.flashCount.textContent = `${currentFlash + 1} / ${flashcards.length}`;

  el.flashProgressBar.style.width =
    `${((currentFlash + 1) / flashcards.length) * 100}%`;

  el.flashcard.setAttribute(
    'aria-label',
    `Flashcard ${currentFlash + 1} de ${flashcards.length}: ${flashcard.q}. Ative para ver a resposta.`
  );
}


// Mostrar ou esconder resposta
function flipFlash() {
  const showAnswer = el.flashAnswer.classList.contains('hidden');

  el.flashAnswer.classList.toggle('hidden', !showAnswer);
  el.flashQuestion.classList.toggle('hidden', showAnswer);

  el.flipHint.innerHTML = showAnswer
    ? 'Clique para voltar à pergunta <span aria-hidden="true">↻</span>'
    : 'Clique no cartão para virar <span aria-hidden="true">↻</span>';

  el.flipCard.textContent = showAnswer ? 'Ver pergunta ↻' : 'Ver resposta ↻';

  el.flashcard.setAttribute(
    'aria-label',
    showAnswer
      ? `Resposta: ${el.flashAnswer.textContent}`
      : `Flashcard ${currentFlash + 1} de ${flashcards.length}: ${el.flashQuestion.textContent}. Ative para ver a resposta.`
  );
}


// Virar cartão clicando nele
el.flashcard.addEventListener('click', flipFlash);


// Virar cartão pelo botão
el.flipCard.addEventListener('click', flipFlash);


// Cartão anterior
el.prevCard.addEventListener('click', () => {
  currentFlash =
    (currentFlash - 1 + flashcards.length) % flashcards.length;

  renderFlash();
});


// Próximo cartão
el.nextCard.addEventListener('click', () => {
  currentFlash = (currentFlash + 1) % flashcards.length;

  renderFlash();
});


// Atalhos de teclado para navegar nos flashcards
document.getElementById('flashcards').addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;

  if (event.key === 'ArrowLeft') {
    currentFlash =
      (currentFlash - 1 + flashcards.length) % flashcards.length;

    renderFlash();
  }

  if (event.key === 'ArrowRight') {
    currentFlash = (currentFlash + 1) % flashcards.length;

    renderFlash();
  }
});


/* =============================================
   10. QUESTÕES COM CORREÇÃO AUTOMÁTICA
   ============================================= */

/** Gera o HTML das alternativas de uma questão. */
function optionsHTML(question, index) {
  const chosen = answered[question.id];
  const wasAnswered = chosen !== undefined;

  return question.options.map((option, optionIndex) => {
    let className = '';

    if (wasAnswered && optionIndex === question.correct) {
      className = 'correct';
    } else if (
      wasAnswered &&
      optionIndex === chosen &&
      chosen !== question.correct
    ) {
      className = 'incorrect';
    }

    return `
      <button
        type="button"
        class="option ${className}"
        data-q="${index}"
        data-option="${optionIndex}"
        ${wasAnswered ? 'disabled' : ''}
      >
        <span class="option-letter">
          ${String.fromCharCode(65 + optionIndex)}
        </span>
        <span>${option}</span>
      </button>
    `;
  }).join('');
}


/** Gera o HTML do comentário gabarito de uma questão. */
function feedbackHTML(question) {
  const chosen = answered[question.id];

  if (chosen === undefined) return '';

  const isCorrect = chosen === question.correct;

  return `
    <div class="feedback ${isCorrect ? '' : 'wrong'}">
      <strong>
        ${isCorrect ? 'Resposta correta!' : 'Vamos revisar.'}
      </strong>
      ${question.explanation}
    </div>
  `;
}


/** Gera o HTML de uma questão, respeitando a resposta já dada. */
function questionCardHTML(question, index) {
  return `
    <article class="question-card" data-question="${index}">
      <div class="question-meta">
        <span>QUESTÃO ${String(index + 1).padStart(2, '0')}</span>
        <span>${question.topic}</span>
      </div>

      <h3>${question.q}</h3>

      <div class="options">
        ${optionsHTML(question, index)}
      </div>

      ${feedbackHTML(question)}
    </article>
  `;
}


/** Desenha todas as questões. */
function renderQuestions() {
  el.questionList.innerHTML = questions
    .map((question, index) => questionCardHTML(question, index))
    .join('');

  updateScore();
}


/**
 * Atualiza apenas a questão respondida. As alternativas existentes são
 * reaproveitadas (em vez de recriadas) para que o foco do teclado e a
 * rolagem da página sejam preservados.
 */
function updateQuestion(index) {
  const card = el.questionList.querySelector(`[data-question="${index}"]`);

  if (!card) {
    renderQuestions();
    return;
  }

  const question = questions[index];
  const chosen = answered[question.id];

  // Marca as alternativas no lugar, sem recriar os botões
  card.querySelectorAll('.option').forEach(button => {
    const optionIndex = Number(button.dataset.option);

    button.classList.remove('correct', 'incorrect');

    if (optionIndex === question.correct) {
      button.classList.add('correct');
    } else if (optionIndex === chosen) {
      button.classList.add('incorrect');
    }

    button.disabled = true;
  });

  // Insere ou troca o comentário do gabarito
  const existingFeedback = card.querySelector('.feedback');

  if (existingFeedback) {
    existingFeedback.remove();
  }

  card.insertAdjacentHTML('beforeend', feedbackHTML(question));
}


// Atualizar desempenho
function updateScore() {
  const total = questions.length;

  const answeredCount = questions.filter(
    question => answered[question.id] !== undefined
  ).length;

  const correct = questions.filter(
    question => answered[question.id] === question.correct
  ).length;

  // O percentual considera o total de questões, para que a barra
  // represente o progresso real e não apenas as questões já respondidas.
  const percent = total
    ? Math.round((correct / total) * 100)
    : 0;

  el.quizScore.textContent = `${percent}%`;
  el.scoreBar.style.width = `${percent}%`;
  el.scoreDetail.textContent =
    `${answeredCount} de ${total} questões respondidas · ${correct} acerto${correct === 1 ? '' : 's'}`;
  el.statAnswered.textContent = answeredCount;
}


// Registrar resposta selecionada
el.questionList.addEventListener('click', event => {
  const button = event.target.closest('[data-q]');

  if (!button) return;

  const questionIndex = Number(button.dataset.q);
  const optionIndex = Number(button.dataset.option);

  const question = questions[questionIndex];

  if (!question) return;

  // Impedir que uma questão seja respondida duas vezes
  if (answered[question.id] !== undefined) return;

  answered[question.id] = optionIndex;

  // Salvar o progresso no navegador
  saveProgress();

  updateQuestion(questionIndex);
  updateScore();
});


// Reiniciar progresso
el.resetQuiz.addEventListener('click', () => {
  answered = {};

  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  } catch (error) {
    console.warn('Não foi possível remover o progresso salvo.');
  }

  renderQuestions();
});


/* =============================================
   11. TEMAS DE REDAÇÃO POR EIXO
   ============================================= */

function renderEssays(axis) {
  const list = essays[axis] || [];

  el.essayPanel.innerHTML = list.map((essay, index) => `
    <article class="essay-card">
      <span class="essay-number">
        PROPOSTA ${String(index + 1).padStart(2, '0')} ·
        ${axis === 'saude' ? 'SAÚDE' : 'MEIO AMBIENTE'}
      </span>

      <h3>${essay.title}</h3>

      <p>${essay.desc}</p>

      <details>
        <summary>
          Ver caminhos para argumentar
          <span class="details-toggle" aria-hidden="true"></span>
        </summary>
        <p>${essay.support}</p>
      </details>
    </article>
  `).join('');
}


// Alternar entre Saúde e Meio Ambiente
const essayTabs = Array.from(document.querySelectorAll('.essay-tab'));

function selectEssayTab(tab, focus = false) {
  currentEssay = tab.dataset.essay;

  essayTabs.forEach(item => {
    const isActive = item === tab;

    item.classList.toggle('active', isActive);
    item.setAttribute('aria-selected', String(isActive));
    item.tabIndex = isActive ? 0 : -1;
  });

  el.essayPanel.setAttribute('aria-labelledby', tab.id);

  renderEssays(currentEssay);

  if (focus) {
    tab.focus();
  }
}

essayTabs.forEach(tab => {
  tab.addEventListener('click', () => selectEssayTab(tab));
});


// Navegação por teclado entre as abas
el.essayTabs.addEventListener('keydown', event => {
  const current = event.target.closest('.essay-tab');
  const index = essayTabs.indexOf(current);

  if (index === -1) return;

  let next = null;

  if (event.key === 'ArrowRight') {
    next = essayTabs[(index + 1) % essayTabs.length];
  } else if (event.key === 'ArrowLeft') {
    next = essayTabs[(index - 1 + essayTabs.length) % essayTabs.length];
  } else if (event.key === 'Home') {
    next = essayTabs[0];
  } else if (event.key === 'End') {
    next = essayTabs[essayTabs.length - 1];
  }

  if (!next) return;

  event.preventDefault();
  selectEssayTab(next, true);
});


/* =============================================
   12. MENU PARA CELULAR
   ============================================= */

function setMenu(open) {
  el.navMenu.classList.toggle('open', open);

  el.menuToggle.setAttribute('aria-expanded', String(open));
  el.menuToggle.setAttribute(
    'aria-label',
    open ? 'Fechar menu' : 'Abrir menu'
  );
}

el.menuToggle.addEventListener('click', () => {
  setMenu(!el.navMenu.classList.contains('open'));
});


// Fechar menu depois de clicar em um link
el.navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});


// Fechar menu ao pressionar Esc
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;

  if (el.navMenu.classList.contains('open')) {
    setMenu(false);
    el.menuToggle.focus();
  }
});


// Fechar menu ao clicar fora dele
document.addEventListener('click', event => {
  if (!el.navMenu.classList.contains('open')) return;

  if (
    !el.navMenu.contains(event.target) &&
    !el.menuToggle.contains(event.target)
  ) {
    setMenu(false);
  }
});


// Fechar menu ao voltar para o layout de desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    setMenu(false);
  }
});


/* =============================================
   13. INICIALIZAÇÃO DO SITE
   ============================================= */

// Carregar o progresso salvo
answered = loadProgress();

// Atualizar quantidade de conteúdos e cartões
el.statTopics.textContent = topics.length;
el.statCards.textContent = flashcards.length;
el.statEssays.textContent =
  Object.values(essays).reduce((total, list) => total + list.length, 0);

// Carregar as seções ao abrir o site
renderTopics();
renderFlash();
renderQuestions();
renderEssays(currentEssay);

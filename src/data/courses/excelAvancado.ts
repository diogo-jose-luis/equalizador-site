import type { Course } from "@/types/course";

export const excelAvancado: Course = {
  id: "excel-avancado",
  slug: "excel-avancado",

  title: "Excel Avançado",
  shortTitle: "Excel Avançado",
  category: "Produtividade & Dados",

  durationHours: 24,
  durationLabel: "• 24h",

  students: 250,
  lessonsCount: 12,
  rating: 5,
  price: "Sob consulta",

  destaque: true,

  image: "/courses/excel-avancado.png",
  image2: "/courses/excel-avancado-2.png",
  image3: "/courses/excel-avancado-3.png",
  file_url: "/docs/courses/excel-avancado.pdf",

  description:
    "O curso de Excel Avançado capacita o participante a dominar fórmulas e funções complexas, análise e tratamento de dados, construção de relatórios e dashboards profissionais, além de automação com macros. Ideal para quem deseja elevar a produtividade e tomar decisões com base em dados.",

  targetAudience:
    "Profissionais de áreas administrativas, finanças, RH, logística, vendas, estudantes e qualquer pessoa que utiliza Excel no dia a dia e precisa de maior domínio em análise, relatórios e automação.",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Ensino médio concluído",
    "Conhecimentos de Excel Intermédio (tabelas, formatação, funções básicas) – recomendado",
    "Computador com Microsoft Excel (2016 ou superior) – recomendado",
  ],

  objectives: [
    "Aplicar fórmulas e funções de forma eficiente para acelerar tarefas e reduzir erros.",
    "Construir modelos de análise usando funções avançadas, validações e estruturação de dados.",
    "Organizar, limpar e analisar dados com ferramentas de gerenciamento e análise do Excel.",
    "Criar gráficos, tabelas dinâmicas e dashboards orientados à tomada de decisão.",
    "Automatizar processos recorrentes com macros e boas práticas de estruturação de ficheiros.",
    "Aplicar cenários, atingir metas e Solver para simulações e otimização de resultados.",
    "Proteger, distribuir e apresentar um projeto completo (relatório) com qualidade profissional.",
  ],

  modules: [
    {
      code: "01",
      title: "Fórmulas e Funções",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Boas práticas ao escrever fórmulas (referências relativas/absolutas/mistas)",
            "Principais funções do dia a dia (SE, E, OU, CONT.SE, SOMA.SE, MÉDIA.SE)",
            "Funções de texto (ESQUERDA, DIREITA, EXT.TEXTO, PROCURAR, SUBSTITUIR)",
            "Funções de data e hora (HOJE, AGORA, DIAS, DIATRABALHO)",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Fórmulas e Recursos Adicionais",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Nomear intervalos e usar nomes em fórmulas",
            "Validação de dados (listas, regras e mensagens)",
            "Formatação condicional avançada",
            "Auditoria de fórmulas (rastrear precedentes/dependentes e avaliar fórmula)",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Funções Avançadas",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "PROCV/PROCH e alternativas modernas (PROCX, ÍNDICE + CORRESP) (conforme versão)",
            "Funções matriciais e dinâmicas (FILTRAR, CLASSIFICAR, ÚNICO) (conforme versão)",
            "Funções de lógica avançada e tratamento de erros (SEERRO)",
            "Funções para sumarização e análise (SOMARPRODUTO, AGREGAR)",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Gerenciamento e Análise de Dados",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Ordenação avançada e filtros (incluindo filtros personalizados)",
            "Texto para colunas e remoção de duplicados",
            "Tabelas (Formatar como Tabela) e estruturação de base de dados",
            "Consolidação e subtotais",
          ],
        },
      ],
    },
    {
      code: "05",
      title: "Impressão",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Configuração de página (margens, orientação, escala)",
            "Áreas de impressão e repetição de títulos",
            "Cabeçalhos/rodapés e numeração",
            "Exportação para PDF e boas práticas de layout",
          ],
        },
      ],
    },
    {
      code: "06",
      title: "Gráficos",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Tipos de gráficos e quando usar cada um",
            "Formatação profissional (eixos, rótulos, séries e legenda)",
            "Gráficos com intervalos dinâmicos (conforme estrutura)",
            "Boas práticas de comunicação visual com dados",
          ],
        },
      ],
    },
    {
      code: "07",
      title: "Tabela Dinâmica",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Criação e configuração de Tabelas Dinâmicas",
            "Campos, agrupamentos, segmentações e linhas do tempo",
            "Campos calculados e configurações de valores",
            "Gráfico Dinâmico e relatórios rápidos",
          ],
        },
      ],
    },
    {
      code: "08",
      title: "Dashboard",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Planeamento do dashboard (KPI, público-alvo e narrativa)",
            "Indicadores (KPIs) e cartões de resumo",
            "Uso de segmentações, botões e interatividade",
            "Layout, consistência visual e boas práticas de apresentação",
          ],
        },
      ],
    },
    {
      code: "09",
      title: "Macros",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Introdução a macros (gravação e execução)",
            "Noções de VBA para ajustes simples (conforme nível da turma)",
            "Automação de tarefas repetitivas (formatar, limpar, gerar relatórios)",
            "Boas práticas e cuidados de segurança ao usar macros",
          ],
        },
      ],
    },
    {
      code: "10",
      title: "Cenários",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Gestor de Cenários (What-If Analysis)",
            "Comparação de resultados entre cenários",
            "Relatórios de cenários",
            "Aplicações práticas em custos, vendas e projeções",
          ],
        },
      ],
    },
    {
      code: "11",
      title: "Atingir Metas e Solver",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Atingir metas (Goal Seek): quando e como usar",
            "Introdução ao Solver e tipos de problemas",
            "Restrições, variáveis e função objetivo",
            "Casos práticos de otimização (lucro, custo, alocação)",
          ],
        },
      ],
    },
    {
      code: "12",
      title: "Segurança, Distribuição e Projecto",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Proteção de folhas e pastas de trabalho (permissões e bloqueios)",
            "Boas práticas de organização (nomenclatura, estrutura e documentação)",
            "Partilha, controlo de versões e preparação para entrega",
            "Projeto final: construção de um relatório com base de dados, tabela dinâmica e dashboard",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Exercícios práticos por módulo (fórmulas, análise, gráficos e tabelas dinâmicas).",
      "Projeto final (dashboard com KPIs + relatório em PDF).",
    ],
    accreditation: [
      "Certificado de participação emitido pela Equalizador Consultoria e Treinamento.",
      "Aptidão prática para criação de relatórios e automação em Excel em contexto profissional.",
    ],
  },

  tags: [
    "Excel",
    "Excel Avançado",
    "Fórmulas",
    "Funções",
    "Análise de Dados",
    "Tabelas Dinâmicas",
    "Dashboards",
    "Macros",
    "Solver",
    "Produtividade",
  ],
};

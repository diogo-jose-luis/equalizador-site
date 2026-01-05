import type { Course } from "@/types/course";

export const powerBI: Course = {
  id: "power-bi",
  slug: "power-bi",

  title: "Power BI",
  shortTitle: "Power BI",
  category: "Business Intelligence & Analytics",

  durationHours: 24,
  durationLabel: "• 24h",

  students: 220,
  lessonsCount: 7,
  rating: 5,
  price: "Sob consulta",

  destaque: true,

  image: "/courses/power-bi.jpeg",
  image2: "/courses/power-bi-2.jpg",
  image3: "/courses/power-bi-3.png",
  file_url: "/docs/courses/power-bi.pdf",

  description:
    "O curso de Power BI capacita o participante a transformar dados brutos em informações estratégicas por meio de relatórios e dashboards interativos. O foco é dominar todo o ciclo de BI: conexão com dados, transformação (ETL), modelagem, DAX e publicação no Power BI Service.",

  targetAudience:
    "Analistas de dados, profissionais de finanças, RH, gestão, TI, estudantes e qualquer pessoa que precise analisar dados e apresentar insights de forma visual e interativa.",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Ensino médio concluído",
    "Conhecimentos básicos de Excel (tabelas e fórmulas) – recomendado",
    "Computador com Power BI Desktop instalado",
  ],

  objectives: [
    "Compreender os conceitos fundamentais de Business Intelligence.",
    "Conectar o Power BI a diferentes fontes e bancos de dados.",
    "Aplicar processos de ETL no Editor de Consultas (Power Query).",
    "Construir modelos de dados eficientes e relacionamentos corretos.",
    "Criar medidas e cálculos utilizando expressões DAX.",
    "Desenvolver relatórios e dashboards interativos orientados a negócio.",
    "Publicar, partilhar e gerir relatórios no Power BI Service.",
  ],

  modules: [
    {
      code: "01",
      title: "Conceitos do BI",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "O que é Business Intelligence e sua importância",
            "Diferença entre dados, informação e conhecimento",
            "BI tradicional vs BI moderno",
            "Arquitetura básica de uma solução de BI",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Conexão com Diferentes Bancos de Dados",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Conexão com ficheiros (Excel, CSV, TXT)",
            "Conexão com bases de dados (SQL Server, MySQL, PostgreSQL)",
            "Conexão com fontes online e APIs (introdução)",
            "Modos de conexão: Import e DirectQuery",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Editor de Consultas – Processo ETL",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Introdução ao Power Query",
            "Limpeza e transformação de dados (ETL)",
            "Tratamento de dados nulos, erros e tipos de dados",
            "Mesclar e anexar consultas",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Modelagem de Dados",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Conceitos de modelagem (tabelas fato e dimensão)",
            "Criação de relacionamentos",
            "Cardinalidade e direção do filtro",
            "Boas práticas de modelagem para performance",
          ],
        },
      ],
    },
    {
      code: "05",
      title: "Expressões DAX",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Introdução ao DAX e contexto de avaliação",
            "Medidas vs colunas calculadas",
            "Funções DAX essenciais (SUM, CALCULATE, FILTER, RELATED)",
            "Time Intelligence (datas, períodos e comparações)",
          ],
        },
      ],
    },
    {
      code: "06",
      title: "Relatórios e Dashboards",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Visualizações nativas do Power BI",
            "Criação de relatórios interativos",
            "Uso de filtros, segmentações e drill-down",
            "Boas práticas de design e storytelling com dados",
          ],
        },
      ],
    },
    {
      code: "07",
      title: "Power BI Service",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Publicação de relatórios no Power BI Service",
            "Workspaces, partilha e permissões",
            "Atualização automática de dados (Gateway – introdução)",
            "Dashboards, apps e consumo de relatórios",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Exercícios práticos por módulo (ETL, modelagem, DAX e visualizações).",
      "Projeto final: dashboard completo publicado no Power BI Service.",
    ],
    accreditation: [
      "Certificado de participação emitido pela Equalizador Consultoria e Treinamento.",
      "Competência prática em criação de soluções de Business Intelligence com Power BI.",
    ],
  },

  tags: [
    "Power BI",
    "Business Intelligence",
    "Análise de Dados",
    "ETL",
    "Power Query",
    "DAX",
    "Dashboards",
    "Relatórios",
    "Data Analytics",
  ],
};

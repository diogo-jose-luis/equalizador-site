import type { Course } from "@/types/course";

export const microsoftOffice: Course = {
  id: "microsoft-office",
  slug: "microsoft-office",

  title: "Microsoft Office (Word, Excel, PowerPoint e Outlook)",
  shortTitle: "Microsoft Office",
  category: "Produtividade",

  durationHours: 24,
  durationLabel: "• 24h",

  students: 400,
  lessonsCount: 4,
  rating: 5,
  price: "Sob consulta",

  destaque: true,

  image: "/courses/microsoft-office.jpeg",
  image2: "/courses/microsoft-office-2.jpg",
  image3: "/courses/microsoft-office-3.png",
  file_url: "/docs/courses/microsoft-office.pdf",

  description:
    "O curso de Microsoft Office fornece domínio prático das ferramentas essenciais do dia a dia profissional: Word para documentos, Excel para cálculos e organização de dados, PowerPoint para apresentações e Outlook para comunicação e produtividade. O foco é aprender com exemplos reais, ganhar velocidade e padronizar entregas com qualidade.",

  targetAudience:
    "Estudantes, profissionais administrativos, RH, finanças, vendas, logística, atendimento e qualquer pessoa que precisa usar o pacote Office com confiança e produtividade no trabalho ou nos estudos.",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Ensino médio concluído",
    "Noções básicas de computador (Windows, pastas e internet)",
    "Computador com Microsoft Office (2016 ou superior) – recomendado",
  ],

  objectives: [
    "Criar e formatar documentos profissionais no Word com rapidez e consistência.",
    "Organizar e analisar informações no Excel usando fórmulas, tabelas e recursos essenciais.",
    "Desenvolver apresentações claras e profissionais no PowerPoint com boas práticas de design.",
    "Gerir e-mails, calendário e tarefas no Outlook, aumentando organização e produtividade.",
    "Aplicar boas práticas de partilha, exportação e entrega de ficheiros em contexto corporativo.",
  ],

  modules: [
    {
      code: "01",
      title: "Word",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Criação e formatação de documentos (fontes, parágrafos, estilos)",
            "Listas, cabeçalhos, numeração e sumário automático",
            "Inserção de tabelas, imagens, formas e cabeçalho/rodapé",
            "Configuração de páginas, seções e exportação para PDF",
            "Modelos (templates) e padronização de documentos",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Excel",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Estrutura de folhas, formatação e organização de dados",
            "Fórmulas essenciais (SOMA, MÉDIA, SE, CONT.SE, SOMA.SE)",
            "Tabelas, filtros, ordenação e validação de dados",
            "Gráficos básicos e leitura de resultados",
            "Boas práticas de impressão e exportação de relatórios",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "PowerPoint",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Construção de apresentações do zero e com modelos",
            "Design consistente: temas, cores, fontes e alinhamento",
            "Uso de imagens, ícones, formas, SmartArt e gráficos",
            "Animações e transições com bom senso (clareza e ritmo)",
            "Preparação para apresentação e exportação (PDF e vídeo)",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Outlook",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Gestão de e-mails: pastas, categorias, regras e pesquisa",
            "Boas práticas de comunicação e organização da caixa de entrada",
            "Calendário: criação de eventos, convites e lembretes",
            "Tarefas, notas e acompanhamento (follow-up)",
            "Assinatura, respostas automáticas e segurança básica",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Exercícios práticos por módulo (Word, Excel, PowerPoint e Outlook).",
      "Mini-projeto final: documento + planilha + apresentação, com envio e organização via Outlook.",
    ],
    accreditation: [
      "Certificado de participação emitido pela Equalizador Consultoria e Treinamento.",
      "Competência prática para uso profissional do Microsoft Office no dia a dia.",
    ],
  },

  tags: [
    "Microsoft Office",
    "Word",
    "Excel",
    "PowerPoint",
    "Outlook",
    "Produtividade",
    "Documentos",
    "Planilhas",
    "Apresentações",
    "E-mail e Calendário",
  ],
};

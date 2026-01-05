import type { Course } from "@/types/course";

export const pmpProjectManagementProfessional: Course = {
  id: "pmp-project-management-professional",
  slug: "pmp-project-management-professional",

  title: "PMP® – Project Management Professional",
  shortTitle: "PMP",
  category: "Gestão de Projetos",

  durationHours: 20,
  durationLabel: "• 20h",

  students: 140,
  lessonsCount: 4,
  rating: 5,
  price: "Sob consulta",

  destaque: true,

  image: "/courses/pmp.png",
  image2: "/courses/pmp-2.png",
  image3: "/courses/pmp-3.png",
  file_url: "/docs/courses/pmp.pdf",

  description:
    "O curso PMP® – Project Management Professional prepara profissionais para a certificação globalmente reconhecida do PMI (Project Management Institute), direcionada a gestores experientes na entrega de projetos complexos. A formação cobre os domínios do exame, abordagens preditiva, ágil e híbrida, além de liderança, stakeholders, riscos e estratégias de resolução de questões situacionais.",

  targetAudience:
    "Gerentes de projeto, líderes de equipe, coordenadores, engenheiros, analistas e profissionais envolvidos na gestão e entrega de projetos complexos em qualquer setor.",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Ensino médio concluído",
  ],

  objectives: [
    "Compreender a visão geral do PMBOK® Guide e o conteúdo esperado no exame PMP®.",
    "Dominar a estrutura do exame PMP® e os 3 domínios: Pessoas, Processos e Ambiente de Negócio.",
    "Comparar e aplicar abordagens preditiva, ágil e híbrida conforme o tipo de projeto.",
    "Fortalecer competências em liderança, comunicação e gestão de equipes de alta performance.",
    "Aplicar técnicas de engajamento de stakeholders e gestão de riscos.",
    "Treinar resolução de questões situacionais e estratégias de tempo/priorização para o exame.",
    "Relacionar os conceitos com situações reais do ambiente de projetos (aplicação prática).",
  ],

  modules: [
    {
      code: "01",
      title: "Fundamentos e Domínios do Exame PMP",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Visão geral do PMBOK® Guide",
            "Estrutura do exame PMP® e tipo de questões",
            "Os 3 domínios principais: Pessoas, Processos e Ambiente de Negócio",
            "Habilidades interpessoais e técnicas exigidas pelo PMP®",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Abordagens Preditiva, Ágil e Híbrida",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Gerenciamento preditivo (tradicional) e seus artefatos",
            "Métodos ágeis (Scrum, Kanban e outros) – visão geral",
            "Abordagens híbridas e seleção de estratégia conforme o contexto",
            "Planejamento incremental e adaptativo",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Gestão de Equipes, Stakeholders e Riscos",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Liderança situacional e comunicação eficaz",
            "Engajamento e gestão de stakeholders",
            "Identificação, análise e resposta a riscos",
            "Desenvolvimento de equipes de alta performance",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Preparação para o Exame e Aplicação Prática",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Técnicas para resolução de questões situacionais",
            "Gestão de tempo e priorização durante o exame",
            "Simulados e revisões direcionadas",
            "Aplicação prática dos conceitos em ambientes reais de projeto",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Questionários por módulo com foco nos domínios do exame PMP®.",
      "Exercícios de questões situacionais (estilo PMP®).",
      "Simulado final com revisão dirigida e análise de respostas.",
    ],
    accreditation: [
      "Certificado de participação emitido pela Equalizador Consultoria e Treinamento.",
      "Preparação alinhada aos domínios e formato do exame PMP® do PMI.",
    ],
  },

  tags: [
    "PMP",
    "PMI",
    "Gestão de Projetos",
    "Project Management",
    "PMBOK",
    "Agile",
    "Scrum",
    "Kanban",
    "Gestão de Riscos",
    "Stakeholders",
    "Liderança",
  ],
};

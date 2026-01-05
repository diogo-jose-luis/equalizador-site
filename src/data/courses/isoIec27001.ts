import type { Course } from "@/types/course";

export const isoIec27001: Course = {
  id: "iso-iec-27001",
  slug: "iso-iec-27001",

  title: "ISO/IEC 27001 – Gestão de Segurança da Informação",
  shortTitle: "ISO/IEC 27001",
  category: "Segurança da Informação & Governança",

  durationHours: 20,
  durationLabel: "• 20h",

  students: 120,
  lessonsCount: 4,
  rating: 5,
  price: "Sob consulta",

  destaque: false,

  image: "/courses/iso-27001.png",
  image2: "/courses/iso-27001-2.png",
  image3: "/courses/iso-27001-3.png",
  file_url: "/docs/courses/iso-iec-27001.pdf",

  description:
    "O curso ISO/IEC 27001 – Gestão de Segurança da Informação prepara profissionais para implementar, manter e melhorar um Sistema de Gestão de Segurança da Informação (SGSI), alinhado à norma internacional ISO/IEC 27001, garantindo proteção adequada da informação, conformidade e melhoria contínua.",

  targetAudience:
    "Profissionais de TI, gestores de segurança da informação, auditores, analistas de risco, profissionais de compliance e responsáveis pela proteção e governança da informação nas organizações.",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Ensino médio concluído",
  ],

  objectives: [
    "Compreender os fundamentos e princípios da segurança da informação.",
    "Conhecer a estrutura e os requisitos da norma ISO/IEC 27001.",
    "Aplicar metodologias de avaliação e tratamento de riscos de segurança da informação.",
    "Selecionar e aplicar controles de segurança conforme o Anexo A.",
    "Implementar processos de monitoramento, auditoria e melhoria contínua do SGSI.",
    "Preparar a organização para auditorias internas e certificações externas.",
  ],

  modules: [
    {
      code: "01",
      title: "Fundamentos da Segurança da Informação",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "O que é segurança da informação",
            "Princípios da segurança da informação: confidencialidade, integridade e disponibilidade",
            "Tipos de ameaças, vulnerabilidades e impactos",
            "Legislações e regulamentações relacionadas à segurança da informação",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Estrutura do SGSI com base na ISO/IEC 27001",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Estrutura e requisitos da norma ISO/IEC 27001",
            "Definição de escopo, política de segurança e liderança",
            "Papéis, responsabilidades e envolvimento da gestão",
            "Gestão de recursos, competências e conscientização",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Avaliação e Tratamento de Riscos",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Metodologias de análise e avaliação de riscos",
            "Identificação, análise e avaliação de riscos de segurança",
            "Seleção e aplicação de controles de segurança (Anexo A)",
            "Declaração de Aplicabilidade (SoA)",
            "Monitoramento e revisão contínua dos riscos",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Conformidade, Melhoria e Auditoria",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Definição de objetivos e indicadores de segurança da informação",
            "Auditoria interna do SGSI",
            "Tratamento de não conformidades e ações corretivas",
            "Ciclo PDCA (Plan–Do–Check–Act) aplicado ao SGSI",
            "Preparação para certificação e auditorias externas",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Questionários de avaliação teórica por módulo.",
      "Exercícios práticos de análise de riscos e definição de controles.",
      "Simulação de auditoria interna do SGSI (conceitual).",
    ],
    accreditation: [
      "Certificado de participação emitido pela Equalizador Consultoria e Treinamento.",
      "Preparação alinhada aos requisitos da norma ISO/IEC 27001.",
    ],
  },

  tags: [
    "ISO/IEC 27001",
    "Segurança da Informação",
    "SGSI",
    "Gestão de Riscos",
    "Compliance",
    "Auditoria",
    "Governança de TI",
    "PDCA",
  ],
};

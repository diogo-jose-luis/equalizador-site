import type { Course } from "@/types/course";

export const cobit2019Foundation: Course = {
  id: "cobit-2019-foundation",
  slug: "cobit-2019-foundation",

  title: "COBIT® 2019 Foundation",
  shortTitle: "COBIT 2019",
  category: "Governança de TI",

  durationHours: 20,
  durationLabel: "• 20h",

  students: 100,
  lessonsCount: 4,
  rating: 5,
  price: "Sob consulta",

  destaque: false,

  image: "/courses/cobit.png",
  image2: "/courses/cobit2.jpg",
  image3: "/courses/cobit3.png",
  file_url: "/docs/courses/cobit-2019-foundation.pdf",

  description:
    "A certificação COBIT® 2019 Foundation apresenta os fundamentos da governança e gestão corporativa de TI, com foco em como a tecnologia pode ser usada de forma estratégica, controlada e alinhada aos objetivos do negócio.",

  targetAudience:
    "Profissionais de TI, auditores, gestores, analistas de risco, consultores e membros de áreas de compliance e controle interno.",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Ensino médio concluído",
  ],

  objectives: [
    "Compreender os conceitos centrais do COBIT® 2019 e a diferença entre governança e gestão.",
    "Conhecer os princípios do COBIT® 2019 e os benefícios de aplicar o framework.",
    "Entender o sistema de governança, seus componentes e os fatores de design para adaptação ao contexto da organização.",
    "Relacionar o COBIT® com outros frameworks e iniciar uma implementação com avaliação inicial (maturidade e desempenho).",
  ],

  modules: [
    {
      code: "01",
      title: "Introdução ao COBIT® e Conceitos-Chave",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "O que é COBIT® e por que ele é importante",
            "Conceitos centrais: governança x gestão",
            "Princípios do COBIT® 2019",
            "Benefícios da aplicação do framework",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Sistema de Governança e Componentes",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Estrutura do sistema de governança de TI",
            "Componentes do sistema (princípios, políticas, processos, estruturas organizacionais, cultura, competências e mais)",
            "Fatores de design para adaptação do COBIT®",
            "Objetivos de governança e gestão",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Relacionamento com Outras Normas",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Relação entre COBIT® e outras normas: ITIL®, ISO/IEC, TOGAF, PMBOK, etc.",
            "Harmonização de práticas e frameworks",
            "Flexibilidade do COBIT® para diferentes contextos organizacionais",
            "Exemplos de aplicação combinada",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Implementação e Avaliação Inicial",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Etapas iniciais de aplicação do COBIT® na organização",
            "Avaliação de maturidade e desempenho",
            "Introdução à medição de processos e metas",
            "Preparação para níveis avançados (Design and Implementation)",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Avaliação diagnóstica e/ou questionário final de conhecimentos (teoria e conceitos-chave).",
      "Exercícios práticos e discussão de cenários (aplicação de princípios, objetivos e fatores de design).",
    ],
    accreditation: [
      "Certificado de participação emitido pela Equalizador Consultoria e Treinamento.",
      "Preparação alinhada aos fundamentos da certificação COBIT® 2019 Foundation.",
    ],
  },

  tags: [
    "COBIT",
    "COBIT 2019",
    "Governança de TI",
    "Gestão de TI",
    "Risco",
    "Compliance",
    "Auditoria",
    "Controlo Interno",
    "ITIL",
    "ISO/IEC",
  ],
};

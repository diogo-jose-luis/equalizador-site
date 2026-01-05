import type { Course } from "@/types/course";

export const itil4Foundation: Course = {
  id: "itil-4-foundation",
  slug: "itil-4-foundation",

  title: "ITIL® 4 Foundation",
  shortTitle: "ITIL 4",
  category: "Gestão de Serviços de TI",

  durationHours: 20,
  durationLabel: "• 20h",

  students: 200,
  lessonsCount: 4,
  rating: 5,
  price: "Sob consulta",

  destaque: true,

  image: "/courses/itil4.png",
  image2: "/courses/itil4-2.png",
  image3: "/courses/itil4-3.png",
  file_url: "/docs/courses/itil-4-foundation.pdf",

  description:
    "O curso ITIL® 4 Foundation apresenta os conceitos fundamentais do gerenciamento moderno de serviços de TI, focando na criação de valor por meio de serviços digitais, integração com práticas ágeis e alinhamento entre TI e o negócio.",

  targetAudience:
    "Profissionais de TI, técnicos, analistas, gestores, estudantes e qualquer pessoa envolvida na entrega, suporte e gestão de serviços tecnológicos.",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Ensino médio concluído",
  ],

  objectives: [
    "Compreender o conceito de gerenciamento de serviços de TI e criação de valor.",
    "Conhecer o Sistema de Valor de Serviço (SVS) do ITIL® 4.",
    "Aplicar os princípios orientadores do ITIL® 4 no contexto organizacional.",
    "Entender a governança e o papel da liderança na gestão de serviços.",
    "Conhecer as principais práticas ITIL® e o conceito de melhoria contínua.",
    "Preparar-se para o exame ITIL® 4 Foundation.",
  ],

  modules: [
    {
      code: "01",
      title: "Introdução ao Gerenciamento de Serviços",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "O que é gerenciamento de serviços de TI",
            "Valor e co-criação de valor",
            "Partes interessadas nos serviços",
            "Produtos, serviços e recursos",
            "Gerenciamento de recursos e ofertas de serviço",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "O Sistema de Valor de Serviço (SVS)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Componentes do SVS: princípios orientadores, governança, cadeia de valor, práticas e melhoria contínua",
            "Cadeia de Valor do Serviço (Service Value Chain)",
            "Entradas, atividades centrais e saídas do SVS",
            "Criação de valor por meio de atividades integradas",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Princípios Orientadores e Governança",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Os 7 Princípios Orientadores do ITIL® 4",
            "Governança organizacional no contexto do SVS",
            "Papel da liderança, cultura organizacional e valores",
            "Adaptação dos princípios à realidade da organização",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Práticas ITIL® e Melhoria Contínua",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Estrutura das práticas ITIL® (34 práticas)",
            "Práticas-chave: Incidentes, Mudanças, Requisições de Serviço, Problemas, Conhecimento e Nível de Serviço",
            "Conceito de melhoria contínua e ciclo de vida do serviço",
            "Integração do ITIL® com Lean, Agile e DevOps",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Questionários teóricos por módulo.",
      "Exercícios de aplicação dos conceitos do ITIL® 4.",
      "Simulado final no formato do exame ITIL® 4 Foundation.",
    ],
    accreditation: [
      "Certificado de participação emitido pela Equalizador Consultoria e Treinamento.",
      "Preparação alinhada ao exame oficial ITIL® 4 Foundation.",
    ],
  },

  tags: [
    "ITIL",
    "ITIL 4",
    "Gestão de Serviços de TI",
    "ITSM",
    "Governança",
    "Melhoria Contínua",
    "Agile",
    "DevOps",
  ],
};

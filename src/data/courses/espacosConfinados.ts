import type { Course } from "@/types/course";

export const espacosConfinados: Course = {
  id: "espacos-confinados-cse",
  slug: "espacos-confinados-cse",

  title: "ESPAÇOS CONFINADOS (CSE)",
  shortTitle: "CSE",
  category: "Segurança Offshore",

  durationHours: 8,
  durationLabel: "• 8h",

  students: 50,
  lessonsCount: 3,
  rating: 5,
  price: "Sob consulta",

  destaque: false,

  image: "/courses/cse.png",
  image2: "/courses/cse-2.png",
  image3: "/courses/cse3.png",
  file_url: "/docs/courses/cse.pdf",

  description:
    "Formação em Espaços Confinados (CSE) para reconhecer e avaliar riscos, aplicar procedimentos seguros, utilizar EPIs adequados e atuar de forma coordenada em situações de emergência e resgate.",

  targetAudience:
    "Profissionais que atuam em espaços confinados (operações industriais, construção, petróleo e gás).",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Triagem médica e/ou avaliação física (dependendo do local de trabalho)",
  ],

  objectives: [
    "Reconhecer e avaliar riscos em espaços confinados.",
    "Utilizar EPIs e procedimentos seguros adequados.",
    "Executar práticas corretas de entrada, permanência e saída.",
    "Agir de forma segura e coordenada em situações de emergência e resgate.",
  ],

  modules: [
    {
      code: "01",
      title: "Introdução aos espaços confinados e conceitos básicos (2h)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Definição e tipos de espaços confinados",
            "Legislação aplicável e responsabilidades legais",
            "Identificação de perigos e avaliação de riscos",
            "Permissão de entrada e medidas administrativas",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Procedimentos de segurança e uso de EPIs (3h)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Equipamentos de proteção individual e coletiva específicos para espaços confinados",
            "Monitoramento e ventilação de espaços confinados",
            "Procedimentos de entrada, permanência e saída segura",
            "Boas práticas de comunicação e trabalho em equipe",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Resgate e evacuação em espaços confinados (3h)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Planos de emergência e técnicas de resgate",
            "Equipamentos de resgate e práticas seguras",
            "Exercícios práticos de evacuação e resposta a emergências",
            "Coordenação e comunicação durante o resgate",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Avaliação escrita para o módulo de responsabilidades sociais e segurança pessoal.",
      "Avaliação por observação para os outros módulos.",
    ],
    accreditation: [
      "Certificado de participação emitido pela Equalizador C&T, com validade conforme regulamentação.",
    ],
  },

  tags: ["Segurança", "Offshore", "HSE", "CSE", "Espaços Confinados"],
};

import type { Course } from "@/types/course";

export const bst: Course = {
  id: "bst",
  slug: "bst",

  title: "BASIC SAFETY TRAINING (BST)",
  shortTitle: "BST",
  category: "Segurança Offshore",

  durationHours: 24,
  durationLabel: "• 24h",

  students: 100,
  lessonsCount: 4,
  rating: 5,
  price: "Sob consulta",

  destaque: true,

  image: "/courses/bst.png",
  image2: "/courses/bst-2.png",
  image3: "/courses/bst3.png",
  file_url: "/docs/courses/bst.pdf",

  description:
    "Formação BASIC SAFETY TRAINING (BST) voltada para marítimos e trabalhadores offshore, com foco em sobrevivência no mar, prevenção e combate a incêndio, resposta imediata a emergências, comunicação e cumprimento de procedimentos de segurança.",

  targetAudience: "Marítimos e trabalhadores offshore.",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Triagem médica",
  ],

  objectives: [
    "Sobreviver no mar em caso de abandono do navio.",
    "Minimizar risco de incêndio.",
    "Tomar medidas imediatas em emergências.",
    "Cumprir procedimentos de emergência e comunicar-se de forma eficaz.",
  ],

  modules: [
    {
      code: "01",
      title: "Técnicas de sobrevivência pessoal (8h)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Introdução, segurança e sobrevivência",
            "Situações de emergência",
            "Evacuação",
            "Embarcações de sobrevivência e barcos de resgate",
            "Aparelhos salva-vidas pessoais",
            "Sobrevivência no mar",
            "Equipamento de rádio de emergência",
            "Assistência de helicóptero",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Prevenção e combate a incêndio (4h)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Introdução e princípios",
            "Minimizar o risco de incêndio",
            "Prontidão para emergências",
            "Combate e extinção de incêndios",
            "Revisão e avaliação",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Segurança pessoal e responsabilidades sociais (8h)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Trabalho seguro no navio ou instalação fixa",
            "Relacionamento humano e contribuição para o bom ambiente a bordo",
            "Entendimento e cumprimento de ordens",
            "Métodos em emergência",
            "Prevenção da poluição marinha",
            "Relações humanas",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Primeiros socorros elementares (4h)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Princípios gerais",
            "Estrutura e funções do corpo",
            "Posição da vítima e vítimas inconscientes",
            "Reanimação, sangramento e gestão de choque",
            "Queimaduras e acidentes elétricos",
            "Resgate e transporte de vítimas",
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
      "Reconhecido pela IMO (cursos modelo 1.19, 1.20, 1.13, 1.21).",
      "Licença e certificado emitidos pela Equalizador.",
    ],
  },

  tags: ["BST", "STCW", "Offshore", "Segurança", "IMO"],
};

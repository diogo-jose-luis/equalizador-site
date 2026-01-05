import type { Course } from "@/types/course";

export const gasDetonation: Course = {
  id: "gas-detonation-qgt",
  slug: "gas-detonation-qgt",

  title: "GÁS DETONATION (QGT)",
  shortTitle: "QGT",
  category: "Segurança Offshore",

  durationHours: 24,
  durationLabel: "• 24h",

  students: 100,
  lessonsCount: 3,
  rating: 5,
  price: "Sob consulta",

  destaque: false,

  image: "/courses/qgt.png",
  image2: "/courses/qgt2.png",
  image3: "/courses/qgt3.png",
  file_url: "/docs/courses/qgt.pdf",

  description:
    "Formação GÁS DETONATION (QGT) focada na identificação, avaliação e mitigação de riscos associados a atmosferas explosivas, com uso correto de equipamentos de deteção e aplicação de procedimentos de segurança em ambientes de alto risco.",

  targetAudience:
    "Profissionais que atuam em áreas com risco de explosões de gás, como indústria petrolífera, química e ambientes offshore.",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Triagem médica (opcional, dependendo do ambiente de trabalho)",
  ],

  objectives: [
    "Reconhecer e avaliar riscos associados a atmosferas explosivas.",
    "Utilizar corretamente equipamentos de deteção e monitoramento de gases.",
    "Conhecer e aplicar procedimentos de segurança em situações de emergência.",
    "Desenvolver práticas de trabalho seguro e comunicação eficaz.",
  ],

  modules: [
    {
      code: "01",
      title: "Introdução aos riscos de gases detonantes (2h)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Noções sobre atmosferas explosivas",
            "Propriedades e riscos dos gases detonantes",
            "Identificação de áreas de risco (zonas classificadas)",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Uso de equipamentos de deteção e monitoramento (3h)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Tipos de detetores de gás e suas aplicações",
            "Calibração e verificação do funcionamento dos equipamentos",
            "Limites de explosividade (LEL e UEL)",
            "Interpretação de leituras e alarmes",
            "Cuidados na utilização e manutenção dos detetores",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Procedimentos de segurança e emergências (3h)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Planos de evacuação e resposta a incidentes",
            "Equipamentos de proteção individual e coletiva",
            "Exercícios simulados para resposta rápida e segura",
            "Comunicação e coordenação em situações de risco",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Avaliação escrita para o módulo de responsabilidades sociais e segurança pessoal.",
      "Avaliação por observação para os módulos práticos.",
    ],
    accreditation: [
      "Certificado emitido pela Equalizador, podendo incluir validade e data de revalidação conforme o cliente.",
    ],
  },

  tags: [
    "Segurança",
    "Offshore",
    "HSE",
    "QGT",
    "Gás Detonation",
    "Atmosferas Explosivas",
  ],
};

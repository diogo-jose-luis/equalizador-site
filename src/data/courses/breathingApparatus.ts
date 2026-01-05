import type { Course } from "@/types/course";

export const breathingApparatus: Course = {
  id: "breathing-apparatus",
  slug: "breathing-apparatus",

  title: "BREATHING APPARATUS (BA)",
  shortTitle: "BA",
  category: "Segurança Offshore",

  durationHours: 8,
  durationLabel: "• 8h",

  students: 80,
  lessonsCount: 3,
  rating: 5,
  price: "Sob consulta",

  destaque: false,

  image: "/courses/ba.png",
  image2: "/courses/ba-2.png",
  image3: "/courses/ba3.png",
  file_url: "/docs/courses/ba.pdf",

  description:
    "Formação BREATHING APPARATUS (BA) focada no uso seguro e manutenção de aparelhos de respiração autónoma, com prática e simulações para atuação em atmosferas perigosas.",

  targetAudience:
    "Profissionais que atuam em atmosferas perigosas ou com risco de exposição a gases tóxicos.",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Triagem médica",
  ],

  objectives: [
    "Usar e manter corretamente os aparelhos de respiração autónoma (BA).",
    "Inspecionar e verificar o equipamento antes e após o uso.",
    "Aplicar procedimentos em caso de emergência e evacuação com BA.",
    "Garantir a segurança do utilizador e do ambiente de trabalho.",
  ],

  modules: [
    {
      code: "01",
      title: "Introdução ao BA e importância na segurança (2h)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Noções de atmosferas perigosas",
            "Tipos de aparelhos respiratórios e diferenças fundamentais",
            "Riscos associados ao uso e falhas dos equipamentos",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Inspeção e manutenção dos equipamentos (2h)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Checagem diária e pré-uso dos aparelhos",
            "Manutenção preventiva e corretiva",
            "Armazenamento e cuidados gerais",
            "Documentação e registos de inspeção",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Uso prático e exercícios simulados (4h)",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Colocação e ajuste do BA",
            "Uso em diferentes situações simuladas de risco (fumo, calor, espaços confinados)",
            "Procedimentos de evacuação segura e assistência a colegas em caso de emergência",
            "Exercícios práticos e feedback",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Avaliação escrita (quando aplicável).",
      "Avaliação por observação durante as práticas e simulações.",
    ],
    accreditation: ["Licença e certificado emitidos pela Equalizador."],
  },

  tags: ["Segurança", "Offshore", "HSE", "Breathing Apparatus", "BA"],
};

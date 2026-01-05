import type { Course } from "@/types/course";

export const prince2Foundation: Course = {
  id: "prince2-foundation",
  slug: "prince2-foundation",

  title: "PRINCE2® – Foundation",
  shortTitle: "PRINCE2",
  category: "Gestão de Projetos",

  durationHours: 20,
  durationLabel: "• 20h",

  students: 150,
  lessonsCount: 4,
  rating: 5,
  price: "Sob consulta",

  destaque: true,

  image: "/courses/prince2.png",
  image2: "/courses/prince2-2.png",
  image3: "/courses/prince2-3.png",
  file_url: "/docs/courses/prince2-foundation.pdf",

  description:
    "A certificação PRINCE2® Foundation fornece o conhecimento fundamental sobre a metodologia de gerenciamento de projetos PRINCE2®, permitindo compreender seus princípios, temas e processos, bem como sua aplicação em diferentes tipos de projetos.",

  targetAudience:
    "Profissionais que atuam ou desejam atuar em projetos, como coordenadores, PMOs, analistas, estudantes e membros de equipes de projeto.",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Ensino médio concluído",
  ],

  objectives: [
    "Compreender a estrutura e os benefícios do PRINCE2®.",
    "Conhecer e aplicar os 7 princípios do PRINCE2®.",
    "Entender os 7 temas do PRINCE2® e como suportam o controle do projeto.",
    "Conhecer os processos PRINCE2® e a sequência de execução do projeto.",
    "Entender como adaptar o PRINCE2® ao contexto e complexidade do projeto.",
    "Preparar-se para o exame oficial PRINCE2® Foundation.",
  ],

  modules: [
    {
      code: "01",
      title: "Princípios do PRINCE2®",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Justificação contínua do negócio",
            "Aprender com a experiência",
            "Papéis e responsabilidades definidos",
            "Gestão por estágios",
            "Gestão por exceção",
            "Foco nos produtos",
            "Adaptação ao ambiente do projeto",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Temas do PRINCE2®",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Caso de negócio (Business Case)",
            "Organização",
            "Qualidade",
            "Planos",
            "Riscos",
            "Mudança",
            "Progresso",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Processos PRINCE2®",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Início do projeto",
            "Direção do projeto",
            "Iniciação do projeto",
            "Controle de estágio",
            "Gerenciamento de entrega de produtos",
            "Gerenciamento de limites de estágio",
            "Encerramento do projeto",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Aplicação e Certificação",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Aplicabilidade da metodologia em diferentes tipos de projeto",
            "Relacionamento com outras abordagens (Ágil, PMBOK)",
            "Exemplo prático de uso do PRINCE2®",
            "Preparação para o exame oficial Foundation",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Questionários por módulo com foco em princípios, temas e processos.",
      "Exercícios de fixação e mini-casos práticos.",
      "Simulado final no estilo do exame PRINCE2® Foundation (opcional).",
    ],
    accreditation: [
      "Certificado de participação emitido pela Equalizador Consultoria e Treinamento.",
      "Preparação alinhada ao conteúdo oficial PRINCE2® Foundation.",
    ],
  },

  tags: [
    "PRINCE2",
    "PRINCE2 Foundation",
    "Gestão de Projetos",
    "PMO",
    "Business Case",
    "Riscos",
    "Qualidade",
    "Governança",
  ],
};

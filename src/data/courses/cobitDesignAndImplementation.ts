import type { Course } from "@/types/course";

export const cobitDesignAndImplementation: Course = {
  id: "cobit-design-and-implementation",
  slug: "cobit-design-and-implementation",

  title: "COBIT® 2019 – Design and Implementation",
  shortTitle: "COBIT D&I",
  category: "Governança de TI",

  durationHours: 20,
  durationLabel: "• 20h",

  students: 80,
  lessonsCount: 4,
  rating: 5,
  price: "Sob consulta",

  destaque: false,

  image: "/courses/cobit-di.png",
  image2: "/courses/cobit-di-2.jpg",
  image3: "/courses/cobit-di-3.png",
  file_url: "/docs/courses/cobit-design-and-implementation.pdf",

  description:
    "O curso COBIT® 2019 Design and Implementation aprofunda a aplicação prática do framework COBIT®, capacitando os participantes a projetar, adaptar e implementar sistemas de governança de TI personalizados, alinhados ao contexto, estratégia e objetivos do negócio.",

  targetAudience:
    "Profissionais seniores de TI, gestores de risco, auditores, especialistas em governança, consultores e responsáveis por implementação prática de frameworks de gestão e governança de TI.",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Ensino médio concluído",
    "Conhecimentos prévios de COBIT® 2019 Foundation (recomendado)",
  ],

  objectives: [
    "Compreender os fatores de design do COBIT® e sua aplicação prática.",
    "Projetar sistemas de governança de TI alinhados ao contexto organizacional.",
    "Aplicar a abordagem de implementação do COBIT® baseada em fases.",
    "Gerir a mudança organizacional e o engajamento das partes interessadas.",
    "Medir resultados e estabelecer ciclos de melhoria contínua em governança de TI.",
  ],

  modules: [
    {
      code: "01",
      title: "Design de Sistemas de Governança Personalizados",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Compreensão dos fatores de design do COBIT®",
            "Avaliação do contexto organizacional",
            "Seleção e ajuste de objetivos de governança e gestão",
            "Criação de soluções de governança alinhadas ao negócio",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Abordagem de Implementação do COBIT®",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Estrutura de implementação baseada em fases",
            "Análise de lacunas e definição de ações corretivas",
            "Identificação de riscos e stakeholders-chave",
            "Integração com frameworks e iniciativas existentes",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Gestão da Mudança e Engajamento Organizacional",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Práticas de gestão da mudança organizacional",
            "Engajamento das partes interessadas",
            "Superação de resistências e barreiras culturais",
            "Comunicação e visibilidade da iniciativa de governança",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Medição e Melhoria Contínua",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Modelos de avaliação de desempenho em governança de TI",
            "Medição de benefícios e resultados",
            "Estabelecimento de ciclos de melhoria contínua",
            "Preparação para auditorias e revisões internas",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Avaliação teórica sobre design e implementação do COBIT® 2019.",
      "Análise prática de cenários organizacionais e definição de soluções de governança.",
    ],
    accreditation: [
      "Certificado de participação emitido pela Equalizador Consultoria e Treinamento.",
      "Preparação alinhada ao conteúdo oficial COBIT® 2019 Design and Implementation.",
    ],
  },

  tags: [
    "COBIT",
    "COBIT 2019",
    "Design and Implementation",
    "Governança de TI",
    "Gestão de TI",
    "Risco",
    "Compliance",
    "Auditoria",
    "Melhoria Contínua",
    "Frameworks de TI",
  ],
};

import type { Course } from "@/types/course";

export const leanSixSigmaWhiteBelt: Course = {
  id: "lean-six-sigma-white-belt",
  slug: "lean-six-sigma-white-belt",

  title: "Lean Six Sigma – White Belt",
  shortTitle: "LSS White Belt",
  category: "Qualidade, Processos & Produtividade",

  durationHours: 20,
  durationLabel: "• 20h",

  students: 160,
  lessonsCount: 4,
  rating: 5,
  price: "Sob consulta",

  destaque: false,

  image: "/courses/lean-six-sigma-white-belt.png",
  image2: "/courses/lean-six-sigma-white-belt-2.png",
  image3: "/courses/lean-six-sigma-white-belt-3.png",
  file_url: "/docs/courses/lean-six-sigma-white-belt.pdf",

  description:
    "O curso Lean Six Sigma – White Belt oferece uma introdução aos fundamentos de melhoria contínua, eliminação de desperdícios e aumento de eficiência de processos. O participante aprende os conceitos centrais do Lean e do Six Sigma, a estrutura de níveis de certificação e o ciclo DMAIC, entendendo como apoiar iniciativas de melhoria no ambiente organizacional.",

  targetAudience:
    "Profissionais de qualquer área interessados em iniciar sua jornada em qualidade, processos, produtividade e melhoria contínua.",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Ensino médio concluído",
  ],

  objectives: [
    "Compreender o que é Lean e o que é Six Sigma, e como se complementam.",
    "Distinguir eficiência e eficácia no contexto de processos.",
    "Identificar desperdícios (os 8 desperdícios) e oportunidades de melhoria.",
    "Conhecer a estrutura e os níveis de certificação do Lean Six Sigma.",
    "Entender o papel do White Belt em iniciativas de melhoria contínua.",
    "Compreender o ciclo DMAIC e sua aplicação em projetos de melhoria.",
    "Reconhecer áreas de aplicação e benefícios organizacionais do Lean Six Sigma.",
    "Preparar-se para evoluir para o nível Yellow Belt.",
  ],

  modules: [
    {
      code: "01",
      title: "Fundamentos do Lean e Six Sigma",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "O que é Lean? O que é Six Sigma?",
            "Diferença entre eficiência e eficácia",
            "Introdução ao conceito de desperdício (os 8 desperdícios)",
            "Benefícios para o negócio e para o cliente",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Estrutura e Níveis do Lean Six Sigma",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Níveis de certificação: White, Yellow, Green, Black e Master Black Belt",
            "Cultura de melhoria contínua",
            "Papel do White Belt: apoio, identificação de melhorias e conscientização",
            "Mentalidade de qualidade em todos os níveis",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "O Ciclo DMAIC",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Introdução ao DMAIC: Definir, Medir, Analisar, Melhorar e Controlar",
            "Como o DMAIC orienta projetos de melhoria",
            "Aplicações práticas no ambiente de trabalho",
            "Exemplos simples de aplicação",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Aplicabilidade e Benefícios Organizacionais",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Áreas onde o Lean Six Sigma pode ser aplicado",
            "Benefícios para a organização e para o colaborador",
            "Participação em iniciativas de melhoria e inovação",
            "Preparação para avançar ao nível Yellow Belt",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Questionários teóricos por módulo.",
      "Exercícios rápidos de identificação de desperdícios e oportunidades de melhoria.",
      "Atividade final: mini-caso prático aplicando o raciocínio DMAIC (conceitual).",
    ],
    accreditation: [
      "Certificado de participação emitido pela Equalizador Consultoria e Treinamento.",
      "Preparação introdutória alinhada aos fundamentos do Lean Six Sigma – White Belt.",
    ],
  },

  tags: [
    "Lean",
    "Six Sigma",
    "White Belt",
    "Melhoria Contínua",
    "Qualidade",
    "Processos",
    "Produtividade",
    "DMAIC",
    "Desperdícios",
  ],
};

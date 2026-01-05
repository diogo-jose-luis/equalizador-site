import type { Course } from "@/types/course";

export const azureFundamentals: Course = {
  id: "azure-fundamentals",
  slug: "azure-fundamentals",

  title: "Microsoft Azure Fundamentals (AZ-900)",
  shortTitle: "AZ-900",
  category: "Cloud Computing",

  durationHours: 20,
  durationLabel: "• 20h",

  students: 180,
  lessonsCount: 7,
  rating: 5,
  price: "Sob consulta",

  destaque: false,

  image: "/courses/azure.jpeg",
  image2: "/courses/azure-2.png",
  image3: "/courses/azure-fundamentals-3.png",
  file_url: "/docs/courses/azure-fundamentals-az900.pdf",

  description:
    "O curso Microsoft Azure Fundamentals (AZ-900) introduz os conceitos de computação em nuvem e os principais serviços do Microsoft Azure. O participante aprende os pilares de segurança, governança e conformidade, além de noções de rede, armazenamento, computação e monitoramento — base ideal para iniciar uma carreira em cloud.",

  targetAudience:
    "Iniciantes em cloud, estudantes de TI, profissionais de suporte, redes, sistemas, desenvolvimento e gestores que precisam compreender o Azure e seus serviços essenciais.",

  prerequisites: [
    "Bilhete de identidade ou passaporte",
    "Ensino médio concluído",
    "Noções básicas de TI (redes, sistemas e internet) – recomendado",
    "Conta Microsoft (para laboratório/portal) – recomendado",
  ],

  objectives: [
    "Compreender conceitos fundamentais de cloud (IaaS, PaaS, SaaS) e modelos de implantação.",
    "Conhecer os serviços essenciais do Azure (computação, rede, armazenamento e bases).",
    "Entender princípios de segurança, privacidade, conformidade e confiabilidade no Azure.",
    "Aprender noções de administração do Azure, recursos, assinaturas e grupos de recursos.",
    "Conhecer conceitos de redes virtuais e conectividade entre ambientes.",
    "Introduzir soluções de máquinas virtuais, armazenamento e computação sem servidor.",
    "Monitorar recursos e custos com ferramentas nativas do Azure.",
  ],

  modules: [
    {
      code: "01",
      title: "Conceitos de Nuvem e Serviços Essenciais do Azure",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Conceitos de cloud: IaaS, PaaS e SaaS",
            "Modelos de implantação: pública, privada e híbrida",
            "Principais serviços do Azure e casos de uso",
            "Conceitos de região, zonas de disponibilidade e resiliência",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Segurança, Privacidade, Conformidade e Confiabilidade",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Modelo de responsabilidade compartilhada",
            "Identidade e acesso (visão geral do Entra ID / Azure AD)",
            "Conformidade, privacidade e políticas (visão geral)",
            "Confiabilidade: alta disponibilidade, backup e recuperação",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Administração do Azure e Redes Virtuais",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Azure Portal, Azure CLI e Cloud Shell (visão geral)",
            "Assinaturas, grupos de recursos e RBAC (conceitos)",
            "Rede virtual (VNet), sub-redes e NSG",
            "DNS básico e conceitos de endereçamento IP no Azure",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Conectividade entre Sites e Gerenciamento de Tráfego de Rede",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "VPN Site-to-Site e Point-to-Site (conceitos)",
            "ExpressRoute (visão geral e cenários)",
            "Balanceamento e roteamento: Load Balancer e Application Gateway (introdução)",
            "Gerenciamento e otimização de tráfego (visão geral)",
          ],
        },
      ],
    },
    {
      code: "05",
      title: "Armazenamento e Máquinas Virtuais do Azure",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Opções de armazenamento: Blob, File, Queue e Table (visão geral)",
            "Conceitos de redundância e performance (LRS/GRS etc.)",
            "Máquinas virtuais: conceitos, tamanhos e casos de uso",
            "Discos, snapshots e boas práticas de disponibilidade",
          ],
        },
      ],
    },
    {
      code: "06",
      title: "Computação sem Servidor e Proteção de Dados",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Serverless: Azure Functions (conceitos e exemplos)",
            "Containers e serviços relacionados (visão geral)",
            "Proteção de dados: backup, criptografia e chaves (visão geral)",
            "Governança e gestão de recursos (policies e tags – introdução)",
          ],
        },
      ],
    },
    {
      code: "07",
      title: "Monitoramento",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Azure Monitor: métricas, logs e alertas (visão geral)",
            "Log Analytics e Application Insights (introdução)",
            "Status de serviço e saúde de recursos",
            "Noções de custos: Azure Cost Management + boas práticas",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Questionários por módulo com foco em conceitos do AZ-900.",
      "Laboratórios guiados (portal) e exercícios de fixação.",
      "Simulado final no estilo AZ-900 (opcional).",
    ],
    accreditation: [
      "Certificado de participação emitido pela Equalizador Consultoria e Treinamento.",
      "Preparação alinhada aos tópicos do exame Microsoft AZ-900 (Azure Fundamentals).",
    ],
  },

  tags: [
    "Azure",
    "AZ-900",
    "Cloud",
    "Microsoft Azure",
    "Segurança",
    "Governança",
    "Redes",
    "Armazenamento",
    "Monitoramento",
  ],
};

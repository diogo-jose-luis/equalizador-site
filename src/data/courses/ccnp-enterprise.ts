import type { Course } from "@/types/course";

export const ccnp: Course = {
  id: "ccnp",
  slug: "ccnp-enterprise",

  title: "CCNP ENTERPRISE – Cisco Certified Network Professional",
  shortTitle: "CCNP ENTERPRISE",
  category: "Redes",

  durationHours: 80,
  durationLabel: "• 80h",

  students: 20,
  lessonsCount: 0,
  rating: 5,
  price: "Sob consulta",

  destaque: true,

  image: "/courses/ccnp.png",
  image2: "/courses/ccnp3.png",
  image3: "/courses/ccna2.png",
  file_url: "/docs/courses/ccnp-enterprise.pdf",

  description:
    "Formação avançada em redes Cisco, abrangendo routing, switching, segurança e preparação para exames CCNP Enterprise.",

  targetAudience:
    "Engenheiros de redes, administradores de redes sénior, profissionais de infraestrutura e técnicos certificados CCNA que desejam evoluir para nível profissional em redes Cisco.",

  prerequisites: [
    "Certificação CCNA ou conhecimentos equivalentes",
    "Experiência prática com redes empresariais",
    "Identificação válida (Bilhete de Identidade ou Passaporte)",
  ],

  objectives: [
    "Projetar, implementar e administrar redes empresariais Cisco de média e grande escala.",
    "Configurar routing e switching avançado em ambientes complexos.",
    "Implementar soluções WAN, Wireless e políticas de segurança corporativas.",
    "Diagnosticar e resolver problemas avançados de routing e serviços de rede.",
    "Preparar-se para os exames CCNP ENCORE (350-401) e ENARSI (300-410).",
  ],

  modules: [
    {
      code: "01",
      title: "01 – Arquitetura de Redes Enterprise ( ENCORE )",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Modelos de design de redes corporativas",
            "Campus, WAN, Data Center e Cloud",
            "Alta disponibilidade e redundância",
            "Virtualização de redes",
            "Introdução ao SD-Access",
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Switching Avançado e Tecnologias LAN ( ENCORE )",
      lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "VLANs e trunking avançado",
            "STP (RSTP, MST)",
            "EtherChannel",
            "QoS em LAN",
            "Troubleshooting de switching",
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Routing Avançado (OSPF, EIGRP, BGP) ( ENCORE )",
        lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "OSPF multiárea",
            "EIGRP avançado",
            "Fundamentos de BGP",
            "Redistribuição de rotas (introdução)",
            "Troubleshooting de routing",
          ],
        },
      ],
    },
    {
      code: "04",
      title: "Wireless Enterprise ( ENCORE )",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Arquitetura Wireless Cisco",
            "WLC, APs e roaming",
            "Segurança Wireless (WPA2/WPA3)",
            "Planeamento RF",
            "Troubleshooting Wireless",
          ],
        },
      ],
    },
    {
      code: "05",
      title: "WAN, QoS e Infraestrutura ( ENCORE )",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Tecnologias WAN (MPLS, VPN, SD-WAN)",
            "Qualidade de Serviço (QoS)",
            "Monitorização e telemetria",
            "Infraestrutura resiliente",
            "Casos práticos empresariais",
          ],
        },
      ],
    },
    {
      code: "06",
      title: "Segurança de Redes ( ENCORE )",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "ACLs avançadas",
            "Firewall e IDS/IPS",
            "Segmentação e Zero Trust",
            "Hardening de dispositivos",
            "Segurança de infraestrutura",
          ],
        },
      ],
    },
    {
      code: "07",
      title: "Automação, SDN e Programabilidade ( ENCORE )",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Conceitos de SDN",
            "Cisco DNA Center",
            "APIs REST, JSON",
            "Introdução à automação com Python",
            "Casos práticos de automação",
          ],
        },
      ],
    },
     {
      code: "08",
      title: "OSPF Avançado e Troubleshooting (ENARSI)",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "OSPF multiárea avançado",
            "LSA types e timers",
            "Autenticação",
            "Troubleshooting de adjacências",
            "Otimização de rotas",
          ],
        },
      ],
    },
     {
      code: "09",
      title: "EIGRP Avançado (ENARSI)",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Métricas avançadas",
            "Stub routing",
            "Autenticação",
            "Load balancing",
            "Troubleshooting EIGRP",
          ],
        },
      ],
    },
     {
      code: "10",
      title: "BGP Avançado (ENARSI)",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "iBGP e eBGP",
            "Path attributes",
            "Route filtering",
            "Policy control",
            "Troubleshooting BGP",
          ],
        },
      ],
    },
     {
      code: "11",
      title: "Redistribuição de Rotas (ENARSI)",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Redistribuição entre protocolos",
            "Prevenção de loops",
            "Métricas e tagging",
            "Casos práticos",
            "Boas práticas",
          ],
        },
      ],
    },
     {
      code: "12",
      title: "VPNs, Serviços e Segurança (ENARSI)",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "VPN Site-to-Site",
            "Remote Access VPN",
            "GRE e IPsec",
            "Segurança de routing",
            "Integração WAN",
          ],
        },
      ],
    },
     {
      code: "13",
      title: "Troubleshooting Avançado de Redes (ENARSI)",
       lessons: [
        {
          title: "Conteúdos",
          bullets: [
            "Metodologias estruturadas",
            "Debugs e análise de logs",
            "Casos reais de falhas",
            "Ferramentas Cisco",
            "Otimização e prevenção",
          ],
        },
      ],
    },
  ],

  assessment: {
    exams: [
      "Avaliação prática para os módulos mais práticos.",
      "Avaliação por observação para os outros módulos.",
    ],
    accreditation: ["Licença e certificado emitidos pela Equalizador."],
  },

  tags: ["Cisco", "Networking", "Routing", "Switching"],
};

import type { Course } from "@/types/course";

export const ccnp: Course = {
  id: "ccnp",
  slug: "ccnp-enterprise",

  title: "CCNP ENTERPRISE – Cisco Certified Network Professional",
  shortTitle: "CCNP ENTERPRISE",
  category: "Networking",

  durationHours: 80,
  durationLabel: "• 80h",

  students: 20,
  lessonsCount: 0,
  rating: 5,
  price: "Sob consulta",

  image: "/courses/ccnp.png",
  image2: "/courses/ccnp2.png",
  image3: "/courses/ccna.png",
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
            "Modelo OSI e TCP/IP",
            "Endereçamento IPv4 e máscaras de sub-rede",
            "Introdução ao IPv6",
            "Tipos de comunicação: unicast, multicast, broadcast",
            "Funcionamento básico de switches e routers",
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
            "Criação e gestão de VLANs",
            "Trunking (802.1Q) e VTP",
            "Spanning Tree Protocol (STP/RSTP)",
            "EtherChannel (LACP/PAgP)",
            "Troubleshooting de camadas 1, 2 e 3",
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
            "Configuração de routing estático",
            "Introdução e configuração do OSPF",
            "Fundamentos de EIGRP",
            "Conceitos de métricas, adjacências e caminhos",
            "Inter-VLAN Routing e SVI",
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
            "DHCP, DNS, NAT/PAT e ACLs",
            "Configuração de redes Wireless (WLC e APs)",
            "Políticas de segurança básicas (AAA, portas seguras, SSH)",
            "Mitigação de ataques comuns em redes locais",
            "Planeamento de topologias LAN e WAN",
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
            "Conceitos de automação de redes e APIs",
            "Introdução ao Cisco DNA Center e SDN",
            "Ferramentas de automação (Python, Netconf/Restconf – introdução)",
            "Troubleshooting estruturado (camadas 1 a 4)",
            "Documentação e boas práticas de gestão de redes",
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
            "Conceitos de automação de redes e APIs",
            "Introdução ao Cisco DNA Center e SDN",
            "Ferramentas de automação (Python, Netconf/Restconf – introdução)",
            "Troubleshooting estruturado (camadas 1 a 4)",
            "Documentação e boas práticas de gestão de redes",
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
            "Conceitos de automação de redes e APIs",
            "Introdução ao Cisco DNA Center e SDN",
            "Ferramentas de automação (Python, Netconf/Restconf – introdução)",
            "Troubleshooting estruturado (camadas 1 a 4)",
            "Documentação e boas práticas de gestão de redes",
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

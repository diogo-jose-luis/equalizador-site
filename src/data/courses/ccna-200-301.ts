import type { Course } from "@/types/course";

export const ccna200301: Course = {
  id: "ccna-200-301",
  slug: "ccna-200-301",

  title: "CCNA – Cisco Certified Network Associate (200-301)",
  shortTitle: "CCNA 200-301",
  category: "Networking",

  durationHours: 40,
  durationLabel: "• 40h",

  students: 250,
  lessonsCount: 18,
  rating: 5,
  price: "Sob consulta",

  image: "/courses/ccna.png",
  image2: "/courses/ccna2.png",
  image3: "/courses/ccna.png",
  file_url: "/docs/courses/ccna-200-301.pdf",

  description:
    "Formação prática em fundamentos de redes, switching, routing, serviços e preparação para o exame CCNA 200-301.",

  targetAudience:
    "Profissionais de TI, técnicos de redes, administradores de sistemas, estudantes de informática e todos que desejam adquirir competências práticas em redes Cisco e fundamentos de networking.",

  prerequisites: [
    "Conhecimentos básicos de informática",
    "Preferencial: conhecimento introdutório de redes TCP/IP",
    "Identificação válida (Bilhete de Identidade ou Passaporte)",
  ],

  objectives: [
    "Compreender os fundamentos essenciais de redes (OSI, TCP/IP, IPv4/IPv6).",
    "Configurar routers e switches Cisco para redes LAN e WAN.",
    "Implementar VLANs, Trunking, STP, EtherChannel e outras tecnologias.",
    "Configurar protocolos de routing dinâmico, segurança básica e serviços de rede.",
    "Preparar-se com confiança para o exame CCNA 200-301 com foco prático.",
  ],

  modules: [
    {
      code: "01",
      title: "Fundamentos de Networking (OSI, TCP/IP, IPv4/IPv6)",
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
      title: "Switching, VLANs, STP e Redes LAN",
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
      title: "Routing Estático e Dinâmico (RIP, OSPF, EIGRP)",
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
      title: "Serviços de Rede, Wireless e Segurança Básica",
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
      title: "Automação, SDN, Troubleshooting e Boas Práticas",
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

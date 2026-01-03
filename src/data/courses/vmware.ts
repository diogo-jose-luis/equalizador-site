import type { Course } from "@/types/course";

export const vmware: Course = {
  id: "vmware",
  slug: "vmware",

  title: "VMware Datacenter Virtualization Professional(VCP-DCV 2024)",
  shortTitle: "VMware VCP-DCV 2024",
  category: "Virtualization",

  durationHours: 40,
  durationLabel: "• 40h",

  students: 100,
  lessonsCount: 18,
  rating: 5,
  price: "Sob consulta",

  image: "/courses/vmware.png",
  image2: "/courses/vmware2.png",
  image3: "/courses/vmware.png",
  file_url: "/docs/courses/vmware.pdf",

  description:
    "Formação prática em virtualização de datacenter VMware, incluindo configuração de vSphere, NSX e preparação para o exame VCP-DCV 2024.",

  targetAudience:
    "Profissionais de TI, administradores de sistemas, técnicos de virtualização e estudantes que desejam adquirir competências práticas em virtualização VMware e infraestrutura de datacenter.",

  prerequisites: [
    "Conhecimentos básicos de virtualização",
    "Noções de redes (TCP/IP, VLANs, storage, iSCSI/NFS)",
    "Identificação válida (Bilhete de Identidade ou Passaporte)",
  ],

  objectives: [
    "Compreender a arquitetura completa do VMware vSphere e seus principais componentes.",
    "Instalar, configurar e administrar hosts ESXi e o vCenter Server.",
    "Gerir máquinas virtuais, redes virtuais, storage e recursos de datacenter.",
    "Implementar HA, vMotion, DRS e políticas de disponibilidade e balanceamento.",
    "Monitorar, otimizar e proteger ambientes VMware seguindo boas práticas.",
  ],

  modules: [
    {
      code: "01",
      title: "Introdução ao VMware vSphere 8 & Arquitetura",
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
      title: "Instalação e Configuração de Hosts ESXi",
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
      title: "Administração do vCenter Server",
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
      title: "Gestão de Máquinas Virtuais e Recursos",
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
      title: "Redes Virtuais no vSphere (vSwitch Standard e Distributed)",
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
      title: "Armazenamento e Datastores (VMFS, NFS, vSAN)",
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
      title: "vMotion, HA, DRS e Alta Disponibilidade no Datacenter",
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
      code: "08",
      title: "Monitorização, Troubleshooting e Boas Práticas",
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
